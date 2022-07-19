package be.prest.Payload.Update;

import be.prest.Entities.Restaurant;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class CategoryUpdatePayload {
    private int id_category;
    private String label;
    private String img;
    private List<Restaurant> restaurants;

}
