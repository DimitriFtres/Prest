package be.prest.Authentification.service;


import be.prest.Authentification.entity.*;
import be.prest.Authentification.entity.payload.*;
import be.prest.Controller.Common.*;

public interface CredentialService {

    Credential saveCredential(Credential credential);

    Credential findCredentialByUsername(String email);

    ApiResponse signup(SignupRequest request);

}