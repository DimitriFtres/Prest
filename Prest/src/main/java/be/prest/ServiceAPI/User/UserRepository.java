package be.prest.ServiceAPI.User;

import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User,Integer> {
  User findById(int id);
}
