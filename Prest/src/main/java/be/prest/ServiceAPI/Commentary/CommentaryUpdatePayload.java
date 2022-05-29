package be.prest.ServiceAPI.Commentary;

import be.prest.ServiceAPI.Restaurant.Restaurant;
import be.prest.ServiceAPI.User.User;
import com.sun.istack.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class CommentaryUpdatePayload {
    private int id_commentary;
    private String note;
    private String text;
    private Restaurant restaurant;
    private User user;

}
