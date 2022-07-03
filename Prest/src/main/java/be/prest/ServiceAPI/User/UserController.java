package be.prest.ServiceAPI.User;

import be.prest.ServiceAPI.Common.ApiResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("user")
public class UserController {
    private String BASE_CODE = "api.user";

    @Autowired
    UserRepository userRepository;

    @GetMapping("/list")
    public ApiResponse list(){
        return new ApiResponse(true, userRepository.findAll(),BASE_CODE + "list.sucess");
    }

    @GetMapping("/detail/{id}")
    public ApiResponse detail(@PathVariable int id) {
        return new ApiResponse(true, userRepository.findById(id), BASE_CODE + "detail.success");
    }

    @GetMapping("/detail/email/{email}")
    public ApiResponse detailFromEMail(@PathVariable String email) {
        return new ApiResponse(true, userRepository.findByCredential_Email(email), BASE_CODE + "detail.success");
    }

    @PostMapping("/create")
    public ApiResponse create(@RequestBody UserCreatePayload payload) {
            try {
                User user = new User.Builder()
                        .setNickname(payload.getNickname())
                        .setAddresses(payload.getAddresses())
//                        .setCommentaries(payload.getCommentaries())
                        .setUserRestaurants(payload.getUserRestaurants())
                        .setCredential(payload.getCredential()).build();
                User newUser = userRepository.save(user);
                return new ApiResponse(true, newUser, BASE_CODE + "create.success");
            } catch (Exception e) {
                e.printStackTrace();
                return new ApiResponse(false, null, BASE_CODE + "create.error");
            }
    }

    @PutMapping("/update")
    public ApiResponse update(@RequestBody UserUpdatePayload payload) {
        User user = userRepository.findById(payload.getId_user());
        if(user != null){
            User newUser = new User(payload);
            User freshUser = userRepository.save(newUser);
            return new ApiResponse(true, freshUser, null);
        } else {
            return new ApiResponse(false, null, "404");
        }
    }

    @DeleteMapping("/delete/{id}")
    public ApiResponse delete(@PathVariable int id) {
        User userToDelete = userRepository.findById(id);
    if(userToDelete != null){
            userRepository.deleteById(id);
            return new ApiResponse(true, null, BASE_CODE + "delete.success");
        }else{
            return new ApiResponse(false, null, BASE_CODE + "delete.error");
        }
    }

}
