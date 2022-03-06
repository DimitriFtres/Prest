package be.prest.User;

import be.prest.Commentary.Commentary;
import be.prest.Restaurant.Restaurant;
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
@Table(name = "user")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;
    @NotNull
    private String nickname;

    @NotNull
    private String country;
    @NotNull
    private String town;
    @NotNull
    private String zip;
    @NotNull
    private String road;
    @NotNull
    private Integer roadNumber;
    //lien vers le documents photo
    @OneToMany(mappedBy = "user")
    private List<Restaurant> restaurants;
    @OneToMany(mappedBy = "user")
    private List<Commentary> commentaries;

    public User(UserUpdatePayload user)
    {
        this.id = user.getId();
        this.nickname = user.getNickname();
        this.country = user.getCountry();
        this.town = user.getTown();
        this.zip = user.getZip();
        this.road = user.getRoad();
        this.roadNumber = user.getRoadNumber();
        this.restaurants = user.getRestaurants();
        this.commentaries = user.getCommentaries();
    }

    public static class Builder
    {
        private int id;
        private String nickname;
        private String country;
        private String town;
        private String zip;
        private String road;
        private Integer roadNumber;
        private String roadBox;
        private List<Commentary> commentaries;

        private List<Restaurant> restaurants;


        public Builder setId(int id) {
            this.id = id;
            return this;
        }

        public Builder setNickname(String nickname) {
            this.nickname = nickname;
            return this;
        }

        public Builder setCountry(String country) {
            this.country = country;
            return this;
        }

        public Builder setTown(String town) {
            this.town = town;
            return this;
        }

        public Builder setZip(String zip) {
            this.zip = zip;
            return this;
        }

        public Builder setRoad(String road) {
            this.road = road;
            return this;
        }

        public Builder setRoadNumber(Integer roadNumber) {
            this.roadNumber = roadNumber;
            return this;
        }

        public Builder setRoadBox(String roadBox) {
            this.roadBox = roadBox;
            return this;
        }

        public Builder setRestaurants(List<Restaurant> restaurants) {
            this.restaurants = restaurants;
            return this;
        }

        public Builder setCommentaries(List<Commentary> commentaries) {
            this.commentaries = commentaries;
            return this;
        }

        public User build()
        {
            return new User(id, nickname, country, town, zip, road, roadNumber, restaurants, commentaries);
        }
    }

}
