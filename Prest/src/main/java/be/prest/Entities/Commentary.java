package be.prest.Entities;

import be.prest.Payload.Update.*;
import com.sun.istack.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.sql.*;

@Data
@Entity
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "commentary")
public class Commentary {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id_commentary;
    @NotNull
    private double note;
    @Column(columnDefinition = "TEXT")
    private String text;
    private Timestamp date;
    @ManyToOne
    @JoinColumn(name = "restaurant_id")
    private Restaurant restaurant;
    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    private boolean actif;

    public Commentary(CommentaryUpdatePayload commentary)
    {
        this.id_commentary = commentary.getId_commentary();
        this.note = commentary.getNote();
        this.restaurant = commentary.getRestaurant();
        this.text = commentary.getText();
        this.date = commentary.getDate();
        this.user = commentary.getUser();
        this.actif = commentary.isActif();
    }

    public static class Builder
    {
        private int id_commentary;
        private double note;
        private String text;
        private Timestamp date;
        private Restaurant restaurant;
        private User user;
        private boolean actif;


        public Builder setId_commentary(int id_commentary) {
            this.id_commentary = id_commentary;
            return this;
        }

        public Builder setNote(double note) {
            this.note = note;
            return this;
        }

        public Builder setText(String text) {
            this.text = text;
            return this;
        }

        public Builder setDate(Timestamp date) {
            this.date = date;
            return this;
        }

        public Builder setRestaurant(Restaurant restaurant) {
            this.restaurant = restaurant;
            return this;
        }

        public Builder setUser(User user) {
            this.user = user;
            return this;
        }

        public Builder setActif(boolean actif) {
            this.actif = actif;
            return this;
        }

        public Commentary build()
        {
            return new Commentary(id_commentary, note, text, date, restaurant, user, actif);
        }
    }

}
