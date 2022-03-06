package be.prest.Credential;

import be.prest.Restaurant.Restaurant;
import be.prest.User.User;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.sun.istack.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.List;

@Data
@Entity
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "credential")
public class Credential {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;
    @NotNull
    private String email;

    @NotNull
    @JsonIgnore
    private String password;

    @OneToOne
    @JoinColumn(name="id")
    private User user;

    public Credential(CredentialUpdatePayload credential)
    {
        this.id = credential.getId();
        this.email = credential.getEmail();
        this.password = credential.getPassword();
        this.user = credential.getUser();

    }

    public static class Builder
    {
        private int id;
        private String email;
        private String password;
        private User user;

        public Builder setId(int id) {
            this.id = id;
            return this;
        }

        public Builder setEmail(String email) {
            this.email = email;
            return this;
        }

        public Builder setPassword(String password) {
            this.password = password;
            return this;
        }

        public Builder setUser(User user) {
            this.user = user;
            return this;
        }

        public Credential build()
        {
            return new Credential(id, email, password, user);
        }
    }

}
