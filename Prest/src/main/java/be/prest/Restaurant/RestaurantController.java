package be.prest.Restaurant;

import be.prest.Common.ApiResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("restaurant")
public class RestaurantController {
    private String BASE_CODE = "api.restaurant";

    @Autowired
    RestaurantRepository restaurantRepository;

    @GetMapping("/list")
    public ApiResponse list(){
        return new ApiResponse(true, restaurantRepository.findAll(),BASE_CODE + "list.sucess");
    }

    @GetMapping("/detail/{id}")
    public ApiResponse detail(@PathVariable int id) {
        return new ApiResponse(true, restaurantRepository.findById(id), BASE_CODE + "detail.success");
    }

    @PostMapping("/create")
    public ApiResponse create(@RequestBody RestaurantCreatePayload payload) {
            try {
//                if(orgRepository.findById(payload.getOrganisation().getId()) == null){
//                    payload.setOrganisation(orgRepository.save(payload.getOrganisation()));
//                }
                Restaurant restaurant = new Restaurant.Builder()
                        .setLabel(payload.getLabel())
                        .setActif(payload.isActif())
                        .setCountry(payload.getCountry())
                        .setDescription(payload.getDescription())
                        .setMenu(payload.getMenu())
                        .setRoad(payload.getRoad())
                        .setRoadBox(payload.getRoadBox())
                        .setRoadNumber(payload.getRoadNumber())
                        .setTown(payload.getTown())
                        .setCategories(payload.getCategories())
                        .setUser(payload.getUser())
                        .setZip(payload.getZip()).build();
                Restaurant newRestaurant = restaurantRepository.save(restaurant);
                return new ApiResponse(true, newRestaurant, BASE_CODE + "create.success");
            } catch (Exception e) {
                e.printStackTrace();
                return new ApiResponse(false, null, BASE_CODE + "create.error");
            }
    }

    @PutMapping("/update")
    public ApiResponse update(@RequestBody RestaurantUpdatePayload payload) {
        Restaurant restaurant = restaurantRepository.findById(payload.getId());
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
