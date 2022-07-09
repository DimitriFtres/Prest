package be.prest.ServiceAPI.Commentary;

import be.prest.ServiceAPI.Common.ApiResponse;
import be.prest.ServiceAPI.Restaurant.*;
import be.prest.ServiceAPI.User.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("commentary")
public class CommentaryController {
    private String BASE_CODE = "api.restaurant";

    @Autowired
    CommentaryRepository commentaryRepository;

    @Autowired
    RestaurantRepository restaurantRepository;

    @Autowired
    UserRepository userRepository;

    @GetMapping("/list")
    public ApiResponse list(){
        return new ApiResponse(true, commentaryRepository.findAllByActif(true),BASE_CODE + "list.sucess");
    }

    @GetMapping("/detail/{id}")
    public ApiResponse detail(@PathVariable int id) {
        return new ApiResponse(true, commentaryRepository.findById(id), BASE_CODE + "detail.success");
    }

    @GetMapping("/listForRestaurant/{restaurant_id}")
    public ApiResponse detailForRestaurant(@PathVariable int restaurant_id) {

        return new ApiResponse(true, commentaryRepository.findAllByRestaurantAndActif(restaurantRepository.findById(restaurant_id), true), BASE_CODE + "detail.success");
    }

    @GetMapping("/listForUser/{user_id}")
    public ApiResponse detailForUser(@PathVariable int user_id) {
        return new ApiResponse(true, commentaryRepository.findAllByUserAndActif(userRepository.findById(user_id), true), BASE_CODE + "detail.success");
    }

    @PostMapping("/create")
    public ApiResponse create(@RequestBody CommentaryCreatePayload payload) {
            try {
                Commentary commentary = new Commentary.Builder()
                        .setNote(payload.getNote())
                        .setText(payload.getText())
                        .setDate(payload.getDate())
                        .setRestaurant((payload.getRestaurant()))
                        .setUser(payload.getUser())
                        .build();
                Commentary newCommentary = commentaryRepository.save(commentary);
                return new ApiResponse(true, newCommentary, BASE_CODE + "create.success");
            } catch (Exception e) {
                e.printStackTrace();
                return new ApiResponse(false, null, BASE_CODE + "create.error");
            }
    }

    @PutMapping("/update")
    public ApiResponse update(@RequestBody CommentaryUpdatePayload payload) {
        Commentary commentary = commentaryRepository.findById(payload.getId_commentary());
        if(commentary != null){
            Commentary newCommentary = new Commentary(payload);
            Commentary freshCommentary = commentaryRepository.save(newCommentary);
            return new ApiResponse(true, freshCommentary, null);
        } else {
            return new ApiResponse(false, null, "404");
        }
    }

    @DeleteMapping("/delete/{id}")
    public ApiResponse delete(@PathVariable int id) {
        Commentary commentaryToDelete = commentaryRepository.findById(id);
    if(commentaryToDelete != null){
            commentaryRepository.deleteById(id);
            return new ApiResponse(true, null, BASE_CODE + "delete.success");
        }else{
            return new ApiResponse(false, null, BASE_CODE + "delete.error");
        }
    }

}
