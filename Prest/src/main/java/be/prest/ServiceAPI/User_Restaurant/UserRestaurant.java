package be.prest.ServiceAPI.User_Restaurant;

import be.prest.ServiceAPI.Restaurant.Restaurant;
import be.prest.ServiceAPI.Role.*;
import be.prest.ServiceAPI.User.User;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import javax.validation.constraints.NotNull;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "user_restaurant")
public class UserRestaurant {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @NotNull
    @ManyToOne
    @JoinColumn(name="id_role", nullable = false)
    private Role role;

    @ManyToOne
    @JoinColumn(name="id_user", nullable=false)
    private User id_user;

    @ManyToOne
    @JoinColumn(name="id_restaurant", nullable=false)
    private Restaurant id_restaurant;

    public UserRestaurant(UserRestaurantUpdatePayload userRestaurant)
    {
        this.id = userRestaurant.getId();
        this.role = userRestaurant.getRole();
        this.id_restaurant = userRestaurant.getId_restaurant();
        this.id_user = userRestaurant.getId_user();

    }

    public static class Builder
    {
        private int id;
        private Role role;
        private Restaurant id_restaurant;
        private User id_user;

        public Builder setId_restaurant(Restaurant id_restaurant) {
            this.id_restaurant = id_restaurant;
            return this;
        }

        public Builder setId(int id) {
            this.id = id;
            return this;
        }

        public Builder setId_user(User id_user) {
            this.id_user = id_user;
            return this;
        }

        public Builder setRole(Role role) {
            this.role = role;
            return this;
        }

        public UserRestaurant build()
        {
            return new UserRestaurant(id, role, id_user, id_restaurant);
        }
    }
}
