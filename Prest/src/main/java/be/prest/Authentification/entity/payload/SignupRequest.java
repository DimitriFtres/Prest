package be.prest.Authentification.entity.payload;
import be.prest.ServiceAPI.Common.*;
import be.prest.ServiceAPI.User.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.Size;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class SignupRequest{

    @NotBlank
    @Size(max = 50)
    @Email
    private String email;
    @NotBlank
    @Size(min = 6, max = 40)
    private String password;
    @NotBlank
    private User user;

    public ApiResponse isValid(){
        if(email == null ||email.isEmpty()){
            if(password == null ||password.isEmpty()){
                return new ApiResponse(false, null, "api.signup.valid-error-full");
            }else{
                return new ApiResponse(false, null, "api.signup.valid-error-email");
            }
        }else if(password == null ||password.isEmpty()){
            return new ApiResponse(false, null, "api.signup.valid-error-password");
        }else if(user == null){
            return new ApiResponse(false, null, "api.signup.valid-error-user");
        }else{
            return new ApiResponse(true, this, null);
        }
    }
}

