package be.prest.Repository;

import be.prest.Entities.*;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User,Integer> {
  User findById(int id);
  User findByCredential_Email(String email);
}
