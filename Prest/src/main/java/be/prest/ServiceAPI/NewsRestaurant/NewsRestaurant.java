package be.prest.ServiceAPI.NewsRestaurant;

import be.prest.ServiceAPI.Restaurant.*;
import be.prest.ServiceAPI.User.*;
import com.sun.istack.*;
import lombok.*;

import javax.persistence.*;
import java.sql.*;

@Data
@Entity
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "news_restaurant")
public class NewsRestaurant {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id_news_restaurant;
    @NotNull
    private String text;
    private Timestamp date;
    @ManyToOne
    @JoinColumn(name = "restaurant_id")
    private Restaurant restaurant;
    @OneToOne
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    public NewsRestaurant(NewsRestaurantUpdatePayload commentary)
    {
        this.id_news_restaurant = commentary.getId_news_restaurant();
        this.restaurant = commentary.getRestaurant();
        this.text = commentary.getText();
        this.date = commentary.getDate();
        this.user = commentary.getUser();

    }

    public static class Builder
    {
        private int id_news_restaurant;
        private String text;
        private Timestamp date;
        private Restaurant restaurant;
        private User user;

        public Builder setId_commentary(int id_news_restaurant) {
            this.id_news_restaurant = id_news_restaurant;
            return this;
        }

        public Builder setText(String text) {
            this.text = text;
            return this;
        }

        public Builder setDate(Timestamp date) {
            this.date = date;
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

        public NewsRestaurant build()
        {
            return new NewsRestaurant(id_news_restaurant, text, date, restaurant, user);
        }
    }

}
