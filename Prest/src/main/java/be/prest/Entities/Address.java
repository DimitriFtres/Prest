package be.prest.Entities;

import be.prest.Payload.Update.*;
import com.sun.istack.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Data
@Entity
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "address")
public class Address {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id_address;

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
    
    private String roadBox;

    public Address(AddressUpdatePayload address)
    {
        this.country = address.getCountry();
        this.town = address.getTown();
        this.zip = address.getZip();
        this.road = address.getRoad();
        this.roadNumber = address.getRoadNumber();
        this.roadBox = address.getRoadBox();
    }

    public static class Builder
    {
        private int id_address;
        private String country;
        private String town;
        private String zip;
        private String road;
        private Integer roadNumber;
        private String roadBox;

        public Builder setId_address(int id_address) {
            this.id_address = id_address;
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

        public Address build()
        {
            return new Address(id_address, country, town, zip, road, roadNumber, roadBox);
        }
    }

}
