package be.prest.Authentification.service;

import be.prest.Authentification.entity.response.*;

public interface TokenService {
    TokenResponse getRefreshToken(String refresh_token);
    TokenResponse getToken(String email, String password);
}
