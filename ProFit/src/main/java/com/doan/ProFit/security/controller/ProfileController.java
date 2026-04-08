package com.doan.ProFit.security.controller;

import com.doan.ProFit.entity.User;
import com.doan.ProFit.repository.UserRepository;
import com.doan.ProFit.security.dto.UserProfileResponse;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/auth")
public class ProfileController {

    private final UserRepository userRepository;

    public ProfileController(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    @GetMapping("/me")
    public ResponseEntity<UserProfileResponse> getCurrentUser() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        if (authentication == null || authentication.getName() == null) {
            return ResponseEntity.status(401).build();
        }

        String identity = authentication.getName();
        return userRepository.findByEmailOrPhone(identity, identity)
                .map(user -> ResponseEntity.ok(new UserProfileResponse(
                        user.getId(),
                        identity,
                        user.getEmail(),
                        user.getFullName()
                )))
                .orElseGet(() -> ResponseEntity.notFound().build());
    }
}
