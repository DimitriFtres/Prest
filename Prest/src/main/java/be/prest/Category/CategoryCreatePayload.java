package be.prest.Category;

import be.prest.Restaurant.Restaurant;
import be.prest.User.User;
import com.sun.istack.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.OneToOne;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class CategoryCreatePayload {
    @NotNull
    private String label;
    private List<Restaurant> restaurants;

}
