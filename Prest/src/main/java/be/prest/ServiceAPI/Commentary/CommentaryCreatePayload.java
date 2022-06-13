package be.prest.ServiceAPI.Commentary;

import be.prest.ServiceAPI.Restaurant.Restaurant;
import be.prest.ServiceAPI.User.User;
import com.sun.istack.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.sql.*;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class CommentaryCreatePayload {
    private String note;
    private String text;
    private Date date;
    private Restaurant restaurant;
    private User user;


}
