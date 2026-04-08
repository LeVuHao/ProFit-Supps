package com.doan.ProFit.security.dto;

public class AuthResponse {
    private final String token;
    private final String refreshToken;
    private final String tokenType = "Bearer";
    private final String username;

    public AuthResponse(String token, String refreshToken, String username) {
        this.token = token;
        this.refreshToken = refreshToken;
        this.username = username;
    }

    public String getToken() {
        return token;
    }

    public String getRefreshToken() {
        return refreshToken;
    }

    public String getTokenType() {
        return tokenType;
    }

    public String getUsername() {
        return username;
    }
}
