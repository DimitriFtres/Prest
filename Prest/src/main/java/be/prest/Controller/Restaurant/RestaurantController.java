package be.prest.Controller.Restaurant;

import be.prest.Entities.*;
import be.prest.Payload.Add.*;
import be.prest.Payload.Update.*;
import be.prest.Repository.*;
import be.prest.Controller.Common.ApiResponse;
import be.prest.Service.Interface.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.*;

import java.io.*;
import java.nio.file.*;
import java.util.*;

@RestController
@RequestMapping("restaurant")
public class RestaurantController {
    private String BASE_CODE = "api.restaurant";

    @Autowired
    RestaurantRepository restaurantRepository;
    @Autowired
    UserRepository userRepository;
    @Autowired
    UserRestaurantRepository userRestaurantRepository;
    @Autowired
    StorageService storageService;

    @GetMapping("/list")
    public ApiResponse list(){
        return new ApiResponse(true,
                restaurantRepository.findAll().stream().map(restaurant ->
                        {
                            restaurant.setImage(storageService.getEncode64(restaurant.getImage()));
                            restaurant.setMenu(storageService.getEncode64(restaurant.getMenu()));
                            return restaurant;
                        }),
                BASE_CODE + "list.sucess");

    }

    @GetMapping("/list/user/{id}")
    public ApiResponse listFromUser(@PathVariable String id){
        return new ApiResponse(true,
                restaurantRepository.findDistinctByUserRestaurantsIn(
                        userRestaurantRepository.findAllByUser(
                                userRepository.findById(Integer.parseInt(id)))).stream().map(restaurant -> {
                    restaurant.setImage(storageService.getEncode64(restaurant.getImage()));
                    restaurant.setMenu(storageService.getEncode64(restaurant.getMenu()));
                    return restaurant;
                }),
                BASE_CODE + "list.sucess");
    }

    @GetMapping("/detail/{id}")
    public ApiResponse detail(@PathVariable int id) {
        Restaurant restaurant = restaurantRepository.findById(id);
        restaurant.setImage(storageService.getEncode64(restaurant.getImage()));
        restaurant.setMenu(storageService.getEncode64(restaurant.getMenu()));
        return new ApiResponse(true, restaurant, BASE_CODE + "detail.success");
    }

//    @GetMapping("/search/restaurant")
//    public ApiResponse searchByLabel(@RequestBody String label, @RequestBody String city, @RequestBody Category category) {
//        return new ApiResponse(true,
//                restaurantRepository.findAllByAddressContainingAndLabelContainingAndCategories(city, label, category),
//                BASE_CODE + "detail.success");
//    }

    @PostMapping("/create")
    public ApiResponse create(@RequestBody RestaurantCreatePayload payload) {
            try {
                Restaurant restaurant = new Restaurant.Builder()
                        .setLabel(payload.getLabel())
                        .setActif(payload.isActif())
                        .setDescription(payload.getDescription())
                        .setMenu(payload.getMenu())
                        .setCategories(payload.getCategories())
                        .setUserRestaurants(payload.getUserRestaurants())
                        .setImage(payload.getImage())
                        .setAddress(payload.getAddress()).build();

                Restaurant newRestaurant = restaurantRepository.save(restaurant);
                return new ApiResponse(true, newRestaurant, BASE_CODE + "create.success");
            } catch (Exception e) {
                e.printStackTrace();
                return new ApiResponse(false, null, BASE_CODE + "create.error");
            }
    }

    @PostMapping("/add/file")
    public ApiResponse addFile(@RequestParam("file") MultipartFile file) {
        try {
            System.out.println("File : " + file.getName());
            return new ApiResponse(true, storageService.save(file), BASE_CODE + "create.success");
        } catch (Exception e) {
            e.printStackTrace();
            return new ApiResponse(false, null, BASE_CODE + "file.error");
        }
    }

    @PutMapping("/update")
    public ApiResponse update(@RequestBody RestaurantUpdatePayload payload) {
        Restaurant restaurant = restaurantRepository.findById(payload.getId_restaurant());
        if(restaurant != null){
            Restaurant newRestaurant = new Restaurant(payload);
            Restaurant freshRestaurant = restaurantRepository.save(newRestaurant);
            return new ApiResponse(true, freshRestaurant, null);
        } else {
            return new ApiResponse(false, null, "404");
        }
    }

    @DeleteMapping("/delete/{id}")
    public ApiResponse delete(@PathVariable int id) {
        Restaurant restaurantToDelete = restaurantRepository.findById(id);
    if(restaurantToDelete != null){
            restaurantRepository.deleteById(id);
            return new ApiResponse(true, null, BASE_CODE + "delete.success");
        }else{
            return new ApiResponse(false, null, BASE_CODE + "delete.error");
        }
    }

}
