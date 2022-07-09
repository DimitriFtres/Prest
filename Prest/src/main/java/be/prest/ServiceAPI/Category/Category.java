package be.prest.ServiceAPI.Category;

import be.prest.ServiceAPI.Restaurant.Restaurant;
import com.fasterxml.jackson.annotation.*;
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
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id_category;
    @NotNull
    private String label;
    private String img;

    @JsonIgnore
    @ManyToMany(mappedBy = "categories")
    private List<Restaurant> restaurants;

    public Category(CategoryUpdatePayload category)
    {
        this.id_category = category.getId_category();
        this.label = category.getLabel();
        this.restaurants = category.getRestaurants();
        this.img = category.getImg();
    }

    public static class Builder
    {
        private int id_category;
        private String label;
        private List<Restaurant> restaurants;
        private String img;

        public Builder setId_category(int id_category) {
            this.id_category = id_category;
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

        public Builder setImg(String img) {
            this.img = img;
            return this;
        }

        public Category build()
        {
            return new Category(id_category, label, img, restaurants);
        }
    }

}
