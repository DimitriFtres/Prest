package be.prest.Authentification.entity;

import be.prest.ServiceAPI.User.User;
import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import javax.validation.constraints.*;

@Data
@Entity
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "credential",
        uniqueConstraints = @UniqueConstraint(columnNames = "email"))
public class Credential {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id_credential;

    @NotNull
    @JsonIgnore
    @Email
    private String email;

    @NotNull
    @JsonIgnore
    private String password;

    @NotNull
    private boolean actif;

    public Credential(String email, String password, Boolean actif) {
        this.email = email;
        this.password = password;
        this.actif = actif;
    }

    public static class Builder
    {
        private int id_credential;
        private String email;
        private String password;
        private boolean actif;

        public Builder setId(int id_credential) {
            this.id_credential = id_credential;
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

        public Builder setActif(boolean actif) {
            this.actif = actif;
            return this;
        }

        public Credential build()
        {
            return new Credential(id_credential, email, password, actif);
        }
    }

}
