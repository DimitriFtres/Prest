package be.prest.Payload.Add;

import be.prest.Entities.*;
import lombok.*;

import java.sql.*;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class NewsRestaurantCreatePayload {
    private String text;
    private Timestamp date;
    private Boolean actif;
    private Restaurant restaurant;
    private User user;

}
