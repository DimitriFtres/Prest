package be.prest.ServiceAPI.Role;

import org.springframework.data.jpa.repository.*;

public interface RoleRepository extends JpaRepository<Role,Integer> {
  Role findById(int id);
}
