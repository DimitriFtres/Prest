package be.prest.Payload.Add;

import be.prest.Entities.Address;
import be.prest.Entities.Category;
import be.prest.Entities.UserRestaurant;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class RestaurantCreatePayload {
    private String label;
    private String description;
    private String menu;
    List<Category> categories;
    private boolean actif;
    private String image;
    private List<UserRestaurant> userRestaurants;
    private Address address;

}
