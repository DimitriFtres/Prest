package be.prest.Commentary;

import org.springframework.data.jpa.repository.JpaRepository;

public interface CommentaryRepository extends JpaRepository<Commentary,Integer> {
  Commentary findById(int id);
}
