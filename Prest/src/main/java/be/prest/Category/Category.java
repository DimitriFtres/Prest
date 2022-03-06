package be.prest.Category;

import be.prest.Restaurant.Restaurant;
import be.prest.User.User;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.sun.istack.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.List;

@Data
@Entity
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "category")
public class Category {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;
    @NotNull
    private String label;

    @ManyToMany(mappedBy = "categories")
    private List<Restaurant> restaurants;

    public Category(CategoryUpdatePayload category)
    {
        this.id = category.getId();
        this.label = category.getLabel();
        this.restaurants = category.getRestaurants();

    }

    public static class Builder
    {
        private int id;
        private String label;
        private List<Restaurant> restaurants;

        public Builder setId(int id) {
            this.id = id;
            return this;
        }

        public Builder setLabel(String label) {
            this.label = label;
            return this;
        }

        public Builder setRestaurants(List<Restaurant> restaurants) {
            this.restaurants = restaurants;
            return this;
        }

        public Category build()
        {
            return new Category(id, label, restaurants);
        }
    }

}
