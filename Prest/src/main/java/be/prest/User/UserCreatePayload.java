package be.prest.User;

import be.prest.Commentary.Commentary;
import be.prest.Restaurant.Restaurant;
import com.sun.istack.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class UserCreatePayload {
    @NotNull
    private String nickname;

    @NotNull
    private String country;
    @NotNull
    private String town;
    @NotNull
    private String zip;
    @NotNull
    private String road;
    @NotNull
    private Integer roadNumber;
    @NotNull
    private String roadBox;
    private List<Restaurant> restaurants;
    private List<Commentary> commentaries;
}
