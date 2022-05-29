package be.prest.ServiceAPI.Role;

import be.prest.ServiceAPI.User.*;
import com.fasterxml.jackson.annotation.*;
import com.sun.istack.NotNull;
import lombok.*;

import javax.persistence.*;
import javax.validation.constraints.*;

@Data
@Entity
@NoArgsConstructor
@AllArgsConstructor
@Table(name = "roles")
public class Role {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id_role;

    @Enumerated(EnumType.STRING)
    private be.prest.Enum.Role role;

}
