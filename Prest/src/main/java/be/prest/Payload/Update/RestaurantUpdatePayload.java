package be.prest.Payload.Update;

import be.prest.Entities.Address;
import be.prest.Entities.Category;
import be.prest.Entities.UserRestaurant;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.web.multipart.*;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class RestaurantUpdatePayload {
    private int id_restaurant;
    private String label;
    private String description;
    private MultipartFile menu;
    List<Category> categories;
    private boolean actif;
    private MultipartFile image;
    private List<UserRestaurant> userRestaurants;
    private Address address;

}
