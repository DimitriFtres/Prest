package be.prest.Repository;

import be.prest.Entities.*;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.*;

public interface CommentaryRepository extends JpaRepository<Commentary,Integer> {
  Commentary findById(int id);
  List<Commentary> findAllByRestaurantAndActif(Restaurant restaurant, boolean actif);
  List<Commentary> findAllByUserAndActif(User user, boolean actif);
  List<Commentary> findAllByActif(boolean actif);
}
