package be.prest.Payload.Update;

import be.prest.Entities.*;
import lombok.*;

import java.sql.*;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class NewsRestaurantUpdatePayload {
    private int id_news_restaurant;
    private String text;
    private Timestamp date;
    private Boolean actif;
    private Restaurant restaurant;
    private User user;

}
