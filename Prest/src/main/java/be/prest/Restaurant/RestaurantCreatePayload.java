package be.prest.Restaurant;

import be.prest.Category.Category;
import be.prest.User.User;
import com.sun.istack.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class RestaurantCreatePayload {
    @NotNull
    private String label;

    private String description;

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

    //lien vers le documents photo
    @NotNull
    private String menu;
    List<Category> categories;
    private User user;
    private boolean actif;
}
