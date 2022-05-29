package be.prest.ServiceAPI.Category;

import be.prest.ServiceAPI.Common.ApiResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("category")
public class CategoryController {
    private String BASE_CODE = "api.restaurant";

    @Autowired
    CategoryRepository categoryRepository;

    @GetMapping("/list")
    public ApiResponse list(){
        return new ApiResponse(true, categoryRepository.findAll(),BASE_CODE + "list.sucess");
    }

    @GetMapping("/detail/{id}")
    public ApiResponse detail(@PathVariable int id) {
        return new ApiResponse(true, categoryRepository.findById(id), BASE_CODE + "detail.success");
    }

    @PostMapping("/create")
    public ApiResponse create(@RequestBody CategoryCreatePayload payload) {
            try {
                Category category = new Category.Builder()
                        .setLabel(payload.getLabel())
                        .setRestaurants(payload.getRestaurants())
                        .setImg(payload.getImg())
                        .build();
                Category newCategory = categoryRepository.save(category);
                return new ApiResponse(true, newCategory, BASE_CODE + "create.success");
            } catch (Exception e) {
                e.printStackTrace();
                return new ApiResponse(false, null, BASE_CODE + "create.error");
            }
    }

    @PutMapping("/update")
    public ApiResponse update(@RequestBody CategoryUpdatePayload payload) {
        Category category = categoryRepository.findById(payload.getId_category());
        if(category != null){
            Category newCategory = new Category(payload);
            Category freshCategory = categoryRepository.save(newCategory);
            return new ApiResponse(true, freshCategory, null);
        } else {
            return new ApiResponse(false, null, "404");
        }
    }

    @DeleteMapping("/delete/{id}")
    public ApiResponse delete(@PathVariable int id) {
        Category categoryToDelete = categoryRepository.findById(id);
    if(categoryToDelete != null){
            categoryRepository.deleteById(id);
            return new ApiResponse(true, null, BASE_CODE + "delete.success");
        }else{
            return new ApiResponse(false, null, BASE_CODE + "delete.error");
        }
    }

}
