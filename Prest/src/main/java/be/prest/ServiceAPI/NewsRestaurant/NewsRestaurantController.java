package be.prest.ServiceAPI.NewsRestaurant;

import be.prest.ServiceAPI.Common.*;
import be.prest.ServiceAPI.Restaurant.*;
import org.springframework.beans.factory.annotation.*;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("news-restaurant")
public class NewsRestaurantController {
    private String BASE_CODE = "api.restaurant";

    @Autowired
    NewsRestaurantRepository newsRestaurantRepository;

    @Autowired
    RestaurantRepository restaurantRepository;

    @GetMapping("/list")
    public ApiResponse list(){
        return new ApiResponse(true, newsRestaurantRepository.findAll(),BASE_CODE + "list.sucess");
    }

    @GetMapping("/detail/{id}")
    public ApiResponse detail(@PathVariable int id) {
        return new ApiResponse(true, newsRestaurantRepository.findById(id), BASE_CODE + "detail.success");
    }

    @GetMapping("/listForRestaurant/{restaurant_id}")
    public ApiResponse detailForRestaurant(@PathVariable int restaurant_id) {

        return new ApiResponse(true, newsRestaurantRepository.findAllByRestaurant(restaurantRepository.findById(restaurant_id)), BASE_CODE + "detail.success");
    }

    @PostMapping("/create")
    public ApiResponse create(@RequestBody NewsRestaurantCreatePayload payload) {
            try {
//                if(orgRepository.findById(payload.getOrganisation().getId()) == null){
//                    payload.setOrganisation(orgRepository.save(payload.getOrganisation()));
//                }
                NewsRestaurant newsRestaurant = new NewsRestaurant.Builder()
                        .setText(payload.getText())
                        .setDate(payload.getDate())
                        .setRestaurant((payload.getRestaurant()))
                        .setUser(payload.getUser())
                        .build();
                NewsRestaurant newNewsRestaurant = newsRestaurantRepository.save(newsRestaurant);
                return new ApiResponse(true, newNewsRestaurant, BASE_CODE + "create.success");
            } catch (Exception e) {
                e.printStackTrace();
                return new ApiResponse(false, null, BASE_CODE + "create.error");
            }
    }

    @PutMapping("/update")
    public ApiResponse update(@RequestBody NewsRestaurantUpdatePayload payload) {
        NewsRestaurant newsRestaurant = newsRestaurantRepository.findById(payload.getId_news_restaurant());
        if(newsRestaurant != null){
            NewsRestaurant newNewsRestaurant = new NewsRestaurant(payload);
            NewsRestaurant freshNewsRestaurant = newsRestaurantRepository.save(newNewsRestaurant);
            return new ApiResponse(true, freshNewsRestaurant, null);
        } else {
            return new ApiResponse(false, null, "404");
        }
    }

    @DeleteMapping("/delete/{id}")
    public ApiResponse delete(@PathVariable int id) {
        NewsRestaurant newsRestaurantToDelete = newsRestaurantRepository.findById(id);
    if(newsRestaurantToDelete != null){
            newsRestaurantRepository.deleteById(id);
            return new ApiResponse(true, null, BASE_CODE + "delete.success");
        }else{
            return new ApiResponse(false, null, BASE_CODE + "delete.error");
        }
    }

}
