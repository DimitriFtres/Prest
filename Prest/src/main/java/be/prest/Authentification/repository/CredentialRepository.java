package be.prest.Authentification.repository;

import be.prest.Authentification.entity.*;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CredentialRepository extends JpaRepository<Credential, Long> {
    Credential findByEmail(String email);

    boolean existsByEmail(String email);
}
