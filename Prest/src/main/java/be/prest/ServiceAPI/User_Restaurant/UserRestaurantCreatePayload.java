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
public class UserRestaurantCreatePayload {
    private Role role;
    private User user;
    private Restaurant restaurant;

}
