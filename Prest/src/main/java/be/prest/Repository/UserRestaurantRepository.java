package be.prest.Repository;

import be.prest.Entities.*;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.*;

public interface UserRestaurantRepository extends JpaRepository<UserRestaurant,Integer> {
  UserRestaurant findById(int id);
  List<UserRestaurant> findAllByUser(User user);
  List<UserRestaurant> findAllByRestaurant(Restaurant restaurant);
}
