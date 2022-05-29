package be.prest.ServiceAPI.Restaurant;

import be.prest.ServiceAPI.Address.Address;
import be.prest.ServiceAPI.Category.Category;
import be.prest.ServiceAPI.User.User;
import be.prest.ServiceAPI.User_Restaurant.UserRestaurant;
import com.sun.istack.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class RestaurantUpdatePayload {
    private int id_restaurant;
    private String label;
    private String description;
    private String menu;
    List<Category> categories;
    private boolean actif;
    private String image;
    private List<UserRestaurant> userRestaurants;
    private Address address;

}
