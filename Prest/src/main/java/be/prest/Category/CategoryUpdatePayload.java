package be.prest.Category;

import be.prest.Restaurant.Restaurant;
import be.prest.User.User;
import com.sun.istack.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class CategoryUpdatePayload {
    private int id;
    @NotNull
    private String label;
    private List<Restaurant> restaurants;

}
