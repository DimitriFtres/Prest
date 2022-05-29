package be.prest.ServiceAPI.User_Restaurant;

import be.prest.ServiceAPI.Restaurant.Restaurant;
import be.prest.ServiceAPI.Role.*;
import be.prest.ServiceAPI.User.User;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class UserRestaurantUpdatePayload {
    private int id;
    private Role role;
    private User id_user;
    private Restaurant id_restaurant;

}
