package be.prest.ServiceAPI.User_Restaurant;

import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRestaurantRepository extends JpaRepository<UserRestaurant,Integer> {
  UserRestaurant findById(int id);
}
