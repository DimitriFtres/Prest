package be.prest.Repository;

import be.prest.Entities.*;
import org.springframework.data.jpa.repository.*;

import java.util.*;

public interface RestaurantRepository extends JpaRepository<Restaurant,Integer> {
  Restaurant findById(int id);
  List<Restaurant> findDistinctByUserRestaurantsIn(List<UserRestaurant> userRestaurants);
}
