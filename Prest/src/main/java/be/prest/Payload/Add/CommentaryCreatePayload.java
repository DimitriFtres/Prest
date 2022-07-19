package be.prest.Payload.Add;

import be.prest.Entities.Restaurant;
import be.prest.Entities.User;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.sql.*;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class CommentaryCreatePayload {
    private double note;
    private String text;
    private Timestamp date;
    private Restaurant restaurant;
    private User user;
    private boolean actif;


}
