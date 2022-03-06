package be.prest.Restaurant;

import be.prest.Category.Category;
import be.prest.User.User;
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
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

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

    @ManyToMany
    @JoinTable( name = "restaurant_category",
            joinColumns = {@JoinColumn( name = "id")},
            inverseJoinColumns = {@JoinColumn( name = "id_category")})
    List<Category> categories;

    @ManyToOne
    @JoinColumn(name = "id", nullable = true)
    private User user;

    private boolean actif;



    public Restaurant(RestaurantUpdatePayload restaurant)
    {
        this.id = restaurant.getId();
        this.label = restaurant.getLabel();
        this.description = restaurant.getDescription();
        this.country = restaurant.getCountry();
        this.town = restaurant.getTown();
        this.zip = restaurant.getZip();
        this.road = restaurant.getRoad();
        this.roadNumber = restaurant.getRoadNumber();
        this.roadBox = restaurant.getRoadBox();
        this.menu = restaurant.getMenu();
        this.actif = restaurant.isActif();
        this.categories = restaurant.getCategories();
        this.user = restaurant.getUser();
    }

    public static class Builder
    {
        private int id;
        private String label;
        private String description;
        private String country;
        private String town;
        private String zip;
        private String road;
        private Integer roadNumber;
        private String roadBox;
        //lien vers le documents photo
        private String menu;
        private boolean actif;
        private List<Category> categories;
        private User user;

        public Builder setUser(User user)
        {
            this.user = user;
            return this;
        }

        public Builder setId(int id) {
            this.id = id;
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

        public Builder setCountry(String country) {
            this.country = country;
            return this;
        }

        public Builder setTown(String town) {
            this.town = town;
            return this;
        }

        public Builder setZip(String zip) {
            this.zip = zip;
            return this;
        }

        public Builder setRoad(String road) {
            this.road = road;
            return this;
        }

        public Builder setRoadNumber(Integer roadNumber) {
            this.roadNumber = roadNumber;
            return this;
        }

        public Builder setRoadBox(String roadBox) {
            this.roadBox = roadBox;
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

        public Restaurant build()
        {
            return new Restaurant(id, label, description, country, town, zip, road, roadNumber, roadBox, menu, categories, user, actif);
        }
    }

}
