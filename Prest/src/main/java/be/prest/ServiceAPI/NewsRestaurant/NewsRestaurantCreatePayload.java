package be.prest.ServiceAPI.NewsRestaurant;

import be.prest.ServiceAPI.Restaurant.*;
import be.prest.ServiceAPI.User.*;
import lombok.*;

import java.sql.*;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class NewsRestaurantCreatePayload {
    private String text;
    private Timestamp date;
    private Restaurant restaurant;
    private User user;

}
