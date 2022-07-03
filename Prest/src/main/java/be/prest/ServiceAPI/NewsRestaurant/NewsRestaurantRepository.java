package be.prest.ServiceAPI.NewsRestaurant;

import be.prest.ServiceAPI.Restaurant.*;
import org.springframework.data.jpa.repository.*;

import java.util.*;

public interface NewsRestaurantRepository extends JpaRepository<NewsRestaurant,Integer> {
  NewsRestaurant findById(int id);
  List<NewsRestaurant> findAllByRestaurant(Restaurant restaurant);
}
