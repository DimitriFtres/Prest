package be.prest.ServiceAPI.User_Restaurant;

import be.prest.ServiceAPI.User.*;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.*;

public interface UserRestaurantRepository extends JpaRepository<UserRestaurant,Integer> {
  UserRestaurant findById(int id);
  List<UserRestaurant> findAllByUser(User user);
}
