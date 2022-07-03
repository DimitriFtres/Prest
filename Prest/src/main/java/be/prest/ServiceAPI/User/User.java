package be.prest.ServiceAPI.User;

import be.prest.Authentification.entity.*;
import be.prest.ServiceAPI.Address.Address;
import be.prest.ServiceAPI.Commentary.Commentary;
import be.prest.ServiceAPI.User_Restaurant.UserRestaurant;
import com.fasterxml.jackson.annotation.*;
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
@Table(name = "users",
    uniqueConstraints = @UniqueConstraint(columnNames = "nickname"))
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id_user;
    @NotNull
    private String nickname;

//    @OneToMany(mappedBy = "user")
//    private List<Commentary> commentaries;

    @OneToMany( targetEntity= UserRestaurant.class, mappedBy="user" )
    private List<UserRestaurant> userRestaurants;

    @OneToMany (targetEntity = Address.class)
    @JoinTable(inverseJoinColumns = @JoinColumn(name = "id_address"))
    private List<Address> addresses;

    @JsonIgnore
    @OneToOne
    @JoinColumn(name="id_credential")
    private Credential credential;

    public User(UserUpdatePayload user)
    {
        this.id_user = user.getId_user();
        this.nickname = user.getNickname();
//        this.commentaries = user.getCommentaries();
        this.userRestaurants = user.getUserRestaurants();
        this.addresses = user.getAddresses();
        this.credential = user.getCredential();
    }

    public static class Builder
    {
        private int id_user;
        private String nickname;
        private List<Address> addresses;
//        private List<Commentary> commentaries;
        private List<UserRestaurant> userRestaurants;
        private Credential credential;

        public Builder setId(int id_user) {
            this.id_user = id_user;
            return this;
        }

        public Builder setCredential(Credential credential) {
            this.credential = credential;
            return this;
        }

        public Builder setNickname(String nickname) {
            this.nickname = nickname;
            return this;
        }

        public Builder setAddresses(List<Address> addresses) {
            this.addresses = addresses;
            return this;
        }

//        public Builder setCommentaries(List<Commentary> commentaries) {
//            this.commentaries = commentaries;
//            return this;
//        }

        public Builder setUserRestaurants(List<UserRestaurant> userRestaurants) {
            this.userRestaurants = userRestaurants;
            return this;
        }

        public User build()
        {
            return new User(id_user, nickname/*, commentaries*/, userRestaurants, addresses, credential);
        }
    }

}
