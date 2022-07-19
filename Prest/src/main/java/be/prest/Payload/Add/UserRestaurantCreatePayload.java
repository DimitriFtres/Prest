package be.prest.Payload.Add;

import be.prest.Entities.*;
import be.prest.Entities.User;
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
