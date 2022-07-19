package be.prest.Controller.Role;

import be.prest.Repository.*;
import be.prest.Controller.Common.*;
import org.springframework.beans.factory.annotation.*;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("role")
public class RoleController {
    private String BASE_CODE = "api.role";

    @Autowired
    RoleRepository roleRepository;

    @GetMapping("/list")
    public ApiResponse list(){
        return new ApiResponse(true, roleRepository.findAll(),BASE_CODE + "list.sucess");
    }

    @GetMapping("/detail/{id}")
    public ApiResponse detail(@PathVariable int id) {
        return new ApiResponse(true, roleRepository.findById(id), BASE_CODE + "detail.success");
    }

}
