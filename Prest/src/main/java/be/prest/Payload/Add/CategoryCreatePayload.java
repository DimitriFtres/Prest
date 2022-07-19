package be.prest.Payload.Add;

import be.prest.Entities.Restaurant;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class CategoryCreatePayload {
    private String label;
    private String img;
    private List<Restaurant> restaurants;

}
