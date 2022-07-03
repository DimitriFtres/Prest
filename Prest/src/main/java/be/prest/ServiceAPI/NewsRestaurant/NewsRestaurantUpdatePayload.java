package be.prest.ServiceAPI.NewsRestaurant;

import be.prest.ServiceAPI.Restaurant.*;
import be.prest.ServiceAPI.User.*;
import lombok.*;

import java.sql.*;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class NewsRestaurantUpdatePayload {
    private int id_news_restaurant;
    private String text;
    private Timestamp date;
    private Restaurant restaurant;
    private User user;

}
