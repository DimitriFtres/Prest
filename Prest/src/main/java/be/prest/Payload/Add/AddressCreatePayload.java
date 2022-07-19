package be.prest.Payload.Add;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class AddressCreatePayload {
    private String country;
    private String town;
    private String zip;
    private String road;
    private Integer roadNumber;
    private String roadBox;
}
