package be.prest.Controller.User_Restaurant;

import be.prest.Entities.*;
import be.prest.Payload.Add.*;
import be.prest.Payload.Update.*;
import be.prest.Repository.*;
import be.prest.Controller.Common.ApiResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("userRestaurant")
public class UserRestaurantController {
    private String BASE_CODE = "api.user-restaurant";

    @Autowired
    UserRestaurantRepository userRestaurantRepository;

    @Autowired
    UserRepository userRepository;

    @Autowired
    RestaurantRepository restaurantRepository;

    @GetMapping("/list")
    public ApiResponse list(){
        return new ApiResponse(true, userRestaurantRepository.findAll(),BASE_CODE + "list.sucess");
    }

    @GetMapping("/list/user/{id}")
    public ApiResponse listFromUser(@PathVariable int id){
        try
        {
            User user = userRepository.findById(id);
            return new ApiResponse(true, userRestaurantRepository.findAllByUser(user),BASE_CODE + "list.sucess");
        } catch (Exception e) {
            e.printStackTrace();
            return new ApiResponse(false, null, BASE_CODE + "list.error");
        }
    }

    @GetMapping("/list/restaurant/{id}")
    public ApiResponse listFromRestaurant(@PathVariable int id){
        try
        {
            Restaurant restaurant = restaurantRepository.findById(id);
            return new ApiResponse(true, userRestaurantRepository.findAllByRestaurant(restaurant),BASE_CODE + "list.sucess");
        } catch (Exception e) {
            e.printStackTrace();
            return new ApiResponse(false, null, BASE_CODE + "list.error");
        }
    }


    @GetMapping("/detail/{id}")
    public ApiResponse detail(@PathVariable int id) {
        return new ApiResponse(true, userRestaurantRepository.findById(id), BASE_CODE + "detail.success");
    }

    @PostMapping("/create")
    public ApiResponse create(@RequestBody UserRestaurantCreatePayload payload) {
            try {
//                if(orgRepository.findById(payload.getOrganisation().getId()) == null){
//                    payload.setOrganisation(orgRepository.save(payload.getOrganisation()));
//                }
                UserRestaurant userRestaurant = new UserRestaurant.Builder()
                        .setUser(payload.getUser())
                        .setRole(payload.getRole())
                        .setRestaurant(payload.getRestaurant())
                        .build();
                UserRestaurant newRestaurant = userRestaurantRepository.save(userRestaurant);
                return new ApiResponse(true, newRestaurant, BASE_CODE + "create.success");
            } catch (Exception e) {
                e.printStackTrace();
                return new ApiResponse(false, null, BASE_CODE + "create.error");
            }
    }

    @PutMapping("/update")
    public ApiResponse update(@RequestBody UserRestaurantUpdatePayload payload) {
        UserRestaurant userRestaurant = userRestaurantRepository.findById(payload.getId());
        if(userRestaurant != null){
            UserRestaurant newUserRestaurant = new UserRestaurant(payload);
            UserRestaurant freshUserRestaurant = userRestaurantRepository.save(newUserRestaurant);
            return new ApiResponse(true, freshUserRestaurant, null);
        } else {
            return new ApiResponse(false, null, "404");
        }
    }

    @DeleteMapping("/delete/{id}")
    public ApiResponse delete(@PathVariable int id) {
        UserRestaurant userRestaurantToDelete = userRestaurantRepository.findById(id);
    if(userRestaurantToDelete != null){
            userRestaurantRepository.deleteById(id);
            return new ApiResponse(true, null, BASE_CODE + "delete.success");
        }else{
            return new ApiResponse(false, null, BASE_CODE + "delete.error");
        }
    }

}
