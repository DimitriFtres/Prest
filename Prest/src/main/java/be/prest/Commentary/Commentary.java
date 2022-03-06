package be.prest.Commentary;

import be.prest.Restaurant.Restaurant;
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
@Table(name = "commentary")
public class Commentary {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;
    @NotNull
    private String note;
    @NotNull
    private String text;
    @ManyToOne
    @JoinColumn(name = "restaurant_id")
    private Restaurant restaurant;
    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    public Commentary(CommentaryUpdatePayload commentary)
    {
        this.id = commentary.getId();
        this.note = commentary.getNote();
        this.restaurant = commentary.getRestaurant();
        this.text = commentary.getText();
        this.user = commentary.getUser();

    }

    public static class Builder
    {
        private int id;
        private String note;
        private String text;
        private Restaurant restaurant;
        private User user;

        public Builder setId(int id) {
            this.id = id;
            return this;
        }

        public Builder setNote(String note) {
            this.note = note;
            return this;
        }

        public Builder setText(String text) {
            this.text = text;
            return this;
        }

        public Builder setRestaurant(Restaurant restaurant) {
            this.restaurant = restaurant;
            return this;
        }

        public Builder setUser(User user) {
            this.user = user;
            return this;
        }

        public Commentary build()
        {
            return new Commentary(id, note, text, restaurant, user);
        }
    }

}
