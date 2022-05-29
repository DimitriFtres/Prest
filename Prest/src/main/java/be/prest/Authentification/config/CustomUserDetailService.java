package be.prest.Authentification.config;


import be.prest.Authentification.entity.*;
import be.prest.Authentification.service.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class CustomUserDetailService implements UserDetailsService {

    @Autowired
    CredentialService credentialService;

    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {

        Credential credential = credentialService.findCredentialByUsername(email);
        if (credential == null)
            throw new UsernameNotFoundException("api.auth.user-not-found");

        List<GrantedAuthority> auths = new ArrayList<>();

        return new org.springframework.security.core.
                userdetails.User(credential.getEmail(), credential.getPassword(), auths);

    }
}
