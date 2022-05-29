package be.prest.ServiceAPI.User;

import be.prest.ServiceAPI.Address.Address;
import be.prest.ServiceAPI.Commentary.Commentary;
import be.prest.ServiceAPI.User_Restaurant.UserRestaurant;
import com.sun.istack.NotNull;
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

}
