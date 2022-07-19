package be.prest.Payload.Add;

import be.prest.Authentification.entity.*;
import be.prest.Entities.Address;
import be.prest.Entities.Commentary;
import be.prest.Entities.UserRestaurant;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class UserCreatePayload {
    private String nickname;
    private List<Commentary> commentaries;
    private List<UserRestaurant> userRestaurants;
    private List<Address> addresses;
    private Credential credential;

}
