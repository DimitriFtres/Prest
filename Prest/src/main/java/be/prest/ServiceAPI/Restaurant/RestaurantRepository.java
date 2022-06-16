package be.prest.ServiceAPI.Restaurant;

import be.prest.ServiceAPI.Category.*;
import org.springframework.data.jpa.repository.*;

import java.util.*;

public interface RestaurantRepository extends JpaRepository<Restaurant,Integer> {
  Restaurant findById(int id);
}
