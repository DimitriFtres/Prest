package be.prest.Repository;

import be.prest.Entities.*;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CategoryRepository extends JpaRepository<Category,Integer> {
  Category findById(int id);
}
