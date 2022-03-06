package be.prest.Credential;

import be.prest.Restaurant.Restaurant;
import be.prest.User.User;
import com.sun.istack.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import java.util.List;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class CredentialCreatePayload {
    @NotNull
    private String email;

    @NotNull
    private String password;

    private User user;

}
