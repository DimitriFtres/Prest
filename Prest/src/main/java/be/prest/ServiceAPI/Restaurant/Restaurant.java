package be.prest.ServiceAPI.Restaurant;

import be.prest.ServiceAPI.Address.Address;
import be.prest.ServiceAPI.Category.Category;
import be.prest.ServiceAPI.User_Restaurant.UserRestaurant;
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
@Table(name = "restaurant")
public class Restaurant {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id_restaurant;

    @NotNull
    private String label;

    private String description;

    private String menu;

    @NotNull
    private boolean actif;

    private String image;

    @ManyToMany()
    @JoinTable( name = "restaurant_category",
            joinColumns = {@JoinColumn( name = "id_restaurant", table = "restaurant")},
            inverseJoinColumns = {@JoinColumn( name = "id_category", table = "category")})
    List<Category> categories;

    @JsonIgnore
    @OneToMany( targetEntity= UserRestaurant.class, mappedBy="restaurant" )
    private List<UserRestaurant> userRestaurants;

    @OneToOne()
    @JoinColumn(name = "id_address", nullable = false)
    private Address address;

    public Restaurant(RestaurantUpdatePayload restaurant)
    {
        this.id_restaurant = restaurant.getId_restaurant();
        this.label = restaurant.getLabel();
        this.description = restaurant.getDescription();
        this.menu = restaurant.getMenu();
        this.actif = restaurant.isActif();
        this.categories = restaurant.getCategories();
        this.userRestaurants = restaurant.getUserRestaurants();
        this.address = restaurant.getAddress();
        this.image = restaurant.getImage();
    }

    public static class Builder
    {
        private int id_restaurant;
        private String label;
        private String description;
        private String menu;
        private boolean actif;
        private List<Category> categories;
        private List<UserRestaurant> userRestaurants;
        private Address address;
        private String image;

        public Builder setUserRestaurants(List<UserRestaurant> userRestaurants)
        {
            this.userRestaurants = userRestaurants;
            return this;
        }

        public Builder setId_restaurant(int id_restaurant) {
            this.id_restaurant = id_restaurant;
            return this;
        }

        public Builder setLabel(String label) {
            this.label = label;
            return this;
        }

        public Builder setDescription(String description) {
            this.description = description;
            return this;
        }

        public Builder setAddress(Address address) {
            this.address = address;
            return this;
        }

        public Builder setMenu(String menu) {
            this.menu = menu;
            return this;
        }

        public Builder setActif(boolean actif) {
            this.actif = actif;
            return this;
        }
        public Builder setCategories(List<Category> categories) {
            this.categories = categories;
            return this;
        }

        public Builder setImage(String image) {
            this.image = image;
            return this;
        }

        public Restaurant build()
        {
            return new Restaurant(id_restaurant, label, description, menu, actif, image, categories, userRestaurants, address);
        }
    }

}
