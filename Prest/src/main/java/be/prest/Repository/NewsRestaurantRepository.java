package be.prest.Repository;

import be.prest.Entities.*;
import org.springframework.data.jpa.repository.*;

import java.util.*;

public interface NewsRestaurantRepository extends JpaRepository<NewsRestaurant,Integer> {
  NewsRestaurant findById(int id);
  List<NewsRestaurant> findAllByRestaurantAndActif(Restaurant restaurant, boolean actif);
}
