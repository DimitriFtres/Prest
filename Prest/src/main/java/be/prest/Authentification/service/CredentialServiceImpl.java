package be.prest.Authentification.service;

import be.prest.Authentification.entity.*;
import be.prest.Authentification.entity.payload.*;
import be.prest.Authentification.repository.*;
import be.prest.ServiceAPI.Common.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;

@Transactional
@Service
public class CredentialServiceImpl implements CredentialService {

    @Autowired
    CredentialRepository credentialRepository;
    @Autowired
    PasswordEncoder encoder;

    @Override
    public Credential saveCredential(Credential credential) {
        return credentialRepository.save(credential);
    }

    @Override
    public Credential findCredentialByUsername(String email) {
        return credentialRepository.findByEmail(email);
    }

    @Override
    public ApiResponse signup(SignupRequest request){
        ApiResponse result = request.isValid();
        if (result.isResult()) {
            if (credentialRepository.existsByEmail(request.getEmail())) {
                return new ApiResponse(false, null, "api.signup.email-exist");
            } else {
                try {
                    Credential credential = this.saveCredential(new Credential.Builder()
                            .setEmail(request.getEmail())
                            .setPassword(encoder.encode(request.getPassword()))
                            .setActif(true)
                            .setUser(request.getUser())
                            .build());
                    return new ApiResponse(true, credential, null);
                } catch (Exception e) {
                    e.printStackTrace();
                    return new ApiResponse(false, null, "api.signup.database-insert-error");
                }
            }
        } else {
            return result;
        }
    }
}
