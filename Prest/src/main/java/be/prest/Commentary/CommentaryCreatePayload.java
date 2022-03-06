package be.prest.Commentary;

import be.prest.Restaurant.Restaurant;
import be.prest.User.User;
import com.sun.istack.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class CommentaryCreatePayload {
    @NotNull
    private String note;
    @NotNull
    private String text;
    private Restaurant restaurant;
    private User user;


}
