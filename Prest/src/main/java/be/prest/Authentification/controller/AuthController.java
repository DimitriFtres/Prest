package be.prest.Authentification.controller;

import be.prest.Authentification.entity.*;
import be.prest.Authentification.entity.payload.*;
import be.prest.Authentification.repository.*;
import be.prest.Authentification.service.*;
import be.prest.ServiceAPI.Common.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.oauth2.config.annotation.web.configuration.EnableResourceServer;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;
import java.util.HashMap;

@CrossOrigin(origins = "*", maxAge = 3600)
@EnableResourceServer
@RestController
@RequestMapping("/account")
public class AuthController {
    @Autowired
    CredentialService credentialService;
    @Autowired
    TokenService tokenService;
    @Autowired
    CredentialRepository credentialRepository;
    @Autowired
    PasswordEncoder encoder;

    @GetMapping("/me")
    public ApiResponse get(final Principal principal) {
        try{
            return new ApiResponse(true, credentialRepository.findByEmail(principal.getName()), null);
        }
        catch(Exception e){
            return new ApiResponse(false, null, e.getMessage());
        }
    }

    @PostMapping("/signin")
    public ApiResponse signin(@RequestBody SignupRequest request) {
        try{
            ApiResponse result = request.isValid();
            if (result.isResult()) {
                Credential credential = credentialRepository.findByEmail(request.getEmail());
                if (credential != null && encoder.matches(request.getPassword(), credential.getPassword())) {
                    HashMap<String, Object> hmap = new HashMap<String, Object>();
                    hmap.put("user", credential);
                    hmap.put("token", this.tokenService.getToken(request.getEmail(), request.getPassword()));
                    return new ApiResponse(true, hmap, null);
                } else {
                    return new ApiResponse(false, null, "api.signin.bad-credentials");
                }
            } else {
                return result;
            }        }
        catch(Exception e){
            return new ApiResponse(false, null, e.getMessage());
        }

    }

    @PostMapping("/refresh")
    public ApiResponse refresh(@RequestBody RefreshTokenRequest refresh) {
        try {
            return new ApiResponse(true, tokenService.getRefreshToken(refresh.getRefresh()), null);
        } catch (Exception e) {
            return new ApiResponse(false, null, e.getMessage());
        }
    }

    @PostMapping("/signup")
    public ApiResponse signup(@RequestBody SignupRequest request) {
        try{
            return credentialService.signup(request);
        }
        catch(Exception e){
            return new ApiResponse(false, null, e.getMessage());
        }
    }

}
