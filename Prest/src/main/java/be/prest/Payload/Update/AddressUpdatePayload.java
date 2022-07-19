package be.prest.Payload.Update;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class AddressUpdatePayload {
    private int id_address;
    private String country;
    private String town;
    private String zip;
    private String road;
    private Integer roadNumber;
    private String roadBox;
}
