package be.prest.ServiceAPI.Address;

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
public class AddressCreatePayload {
    private String country;
    private String town;
    private String zip;
    private String road;
    private Integer roadNumber;
    private String roadBox;
}
