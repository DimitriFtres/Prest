package be.prest.Entities;

import be.prest.Payload.Update.*;
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
    private User user;

    @ManyToOne
    @JoinColumn(name="id_restaurant", nullable=false)
    private Restaurant restaurant;

    public UserRestaurant(UserRestaurantUpdatePayload userRestaurant)
    {
        this.id = userRestaurant.getId();
        this.role = userRestaurant.getRole();
        this.restaurant = userRestaurant.getRestaurant();
        this.user = userRestaurant.getUser();

    }

    public static class Builder
    {
        private int id;
        private Role role;
        private Restaurant restaurant;
        private User user;

        public Builder setRestaurant(Restaurant restaurant) {
            this.restaurant = restaurant;
            return this;
        }

        public Builder setId(int id) {
            this.id = id;
            return this;
        }

        public Builder setUser(User user) {
            this.user = user;
            return this;
        }

        public Builder setRole(Role role) {
            this.role = role;
            return this;
        }

        public UserRestaurant build()
        {
            return new UserRestaurant(id, role, user, restaurant);
        }
    }
}
