package be.prest.ServiceAPI.Commentary;

import be.prest.ServiceAPI.Restaurant.*;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.*;

public interface CommentaryRepository extends JpaRepository<Commentary,Integer> {
  Commentary findById(int id);
  List<Commentary> findAllByRestaurant(Restaurant restaurant);
}
