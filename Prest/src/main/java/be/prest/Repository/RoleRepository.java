package be.prest.Repository;

import be.prest.Entities.*;
import org.springframework.data.jpa.repository.*;

public interface RoleRepository extends JpaRepository<Role,Integer> {
  Role findById(int id);
}
