package com.doan.ProFit.security.controller;

import com.doan.ProFit.dto.request.UserCreationRequest;
import com.doan.ProFit.dto.response.UserResponse;
import com.doan.ProFit.entity.RefreshToken;
import com.doan.ProFit.entity.User;
import com.doan.ProFit.enums.Role;
import com.doan.ProFit.enums.Status;
import com.doan.ProFit.repository.UserRepository;
import com.doan.ProFit.security.dto.AuthRequest;
import com.doan.ProFit.security.dto.AuthResponse;
import com.doan.ProFit.security.dto.TokenRefreshRequest;
import com.doan.ProFit.security.jwt.JwtUtils;
import com.doan.ProFit.security.service.UserDetailsImpl;
import com.doan.ProFit.service.RefreshTokenService;
import com.doan.ProFit.service.UserService;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Map;

@RestController
@RequestMapping("/api/auth")
public class ClientAuthController {
    private final AuthenticationManager authenticationManager;
    private final JwtUtils jwtUtils;
    private final UserService userService;
    private final UserRepository userRepository;
    private final RefreshTokenService refreshTokenService;

    public ClientAuthController(AuthenticationManager authenticationManager,
                                JwtUtils jwtUtils,
                                UserService userService,
                                UserRepository userRepository,
                                RefreshTokenService refreshTokenService) {
        this.authenticationManager = authenticationManager;
        this.jwtUtils = jwtUtils;
        this.userService = userService;
        this.userRepository = userRepository;
        this.refreshTokenService = refreshTokenService;
    }

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody AuthRequest loginRequest) {
        if (loginRequest.getUsername() == null || loginRequest.getPassword() == null
                || loginRequest.getUsername().isBlank() || loginRequest.getPassword().isBlank()) {
            return ResponseEntity.badRequest().body(Map.of("message", "Vui lòng nhập đầy đủ thông tin đăng nhập."));
        }

        try {
            Authentication authentication = authenticationManager.authenticate(
                    new UsernamePasswordAuthenticationToken(loginRequest.getUsername().trim(), loginRequest.getPassword())
            );

            UserDetailsImpl userDetails = (UserDetailsImpl) authentication.getPrincipal();
            String jwt = jwtUtils.generateJwtToken(userDetails, loginRequest.isRememberMe());
            User user = userRepository.findByEmailOrPhone(userDetails.getUsername(), userDetails.getUsername())
                    .orElseThrow(() -> new IllegalStateException("Không thể tìm người dùng sau khi đăng nhập."));
            String refreshToken = refreshTokenService.createRefreshToken(user).getToken();
            return ResponseEntity.ok(new AuthResponse(jwt, refreshToken, userDetails.getUsername()));
        } catch (BadCredentialsException ex) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
                    .body(Map.of("message", "Tên đăng nhập hoặc mật khẩu không đúng."));
        } catch (AuthenticationException ex) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
                    .body(Map.of("message", "Đăng nhập thất bại."));
        }
    }

    @PostMapping("/register")
    public ResponseEntity<?> register(@RequestBody UserCreationRequest request) {
        try {
            if (request.getFullName() == null || request.getFullName().isBlank()) {
                return ResponseEntity.badRequest().body(Map.of("message", "Họ tên là bắt buộc."));
            }
            if (request.getEmail() == null || request.getEmail().isBlank()) {
                return ResponseEntity.badRequest().body(Map.of("message", "Email là bắt buộc."));
            }
            if (request.getPasswordHash() == null || request.getPasswordHash().isBlank()) {
                return ResponseEntity.badRequest().body(Map.of("message", "Mật khẩu là bắt buộc."));
            }

            request.setRole(Role.CUSTOMER);
            request.setStatus(Status.ACTIVE);

            UserResponse savedUser = userService.createUser(request);
            User user = userRepository.findByEmailOrPhone(savedUser.getEmail(), request.getPhone() == null ? "" : request.getPhone())
                    .orElseThrow(() -> new IllegalStateException("Không thể tìm người dùng sau khi đăng ký."));
            String jwt = jwtUtils.generateJwtToken(new UserDetailsImpl(user), false);
            String refreshToken = refreshTokenService.createRefreshToken(user).getToken();
            return ResponseEntity.ok(new AuthResponse(jwt, refreshToken, user.getEmail()));
        } catch (IllegalArgumentException ex) {
            return ResponseEntity.badRequest().body(Map.of("message", ex.getMessage()));
        }
    }

    @PostMapping("/refresh")
    public ResponseEntity<?> refreshToken(@RequestBody TokenRefreshRequest request) {
        String requestRefreshToken = request.getRefreshToken();
        if (requestRefreshToken == null || requestRefreshToken.isBlank()) {
            return ResponseEntity.badRequest().body(Map.of("message", "Refresh token is required."));
        }

        try {
            var refreshTokenEntity = refreshTokenService.findByToken(requestRefreshToken);
            if (refreshTokenEntity.isEmpty()) {
                return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
                        .body(Map.of("message", "Refresh token invalid."));
            }

            RefreshToken verifiedToken = refreshTokenService.verifyExpiration(refreshTokenEntity.get());
            User user = verifiedToken.getUser();
            String token = jwtUtils.generateJwtToken(new UserDetailsImpl(user), false);
            String newRefreshToken = refreshTokenService.createRefreshToken(user).getToken();
            return ResponseEntity.ok(new AuthResponse(token, newRefreshToken, user.getEmail()));
        } catch (IllegalArgumentException ex) {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED)
                    .body(Map.of("message", ex.getMessage()));
        }
    }

    @PostMapping("/logout")
    public ResponseEntity<?> logout(@RequestBody TokenRefreshRequest request) {
        String requestRefreshToken = request.getRefreshToken();
        if (requestRefreshToken == null || requestRefreshToken.isBlank()) {
            return ResponseEntity.badRequest().body(Map.of("message", "Refresh token is required."));
        }

        return refreshTokenService.findByToken(requestRefreshToken)
                .map(refreshToken -> {
                    refreshTokenService.revokeRefreshToken(refreshToken);
                    return ResponseEntity.ok(Map.of("message", "Logout successful."));
                })
                .orElseGet(() -> ResponseEntity.badRequest().body(Map.of("message", "Refresh token not found.")));
    }
}
