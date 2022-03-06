package be.prest.Credential;

import be.prest.Common.ApiResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("credential")
public class CredentialController {
    private String BASE_CODE = "api.restaurant";

    @Autowired
    CredentialRepository credentialRepository;

    @GetMapping("/list")
    public ApiResponse list(){
        return new ApiResponse(true, credentialRepository.findAll(),BASE_CODE + "list.sucess");
    }

    @GetMapping("/detail/{id}")
    public ApiResponse detail(@PathVariable int id) {
        return new ApiResponse(true, credentialRepository.findById(id), BASE_CODE + "detail.success");
    }

    @PostMapping("/create")
    public ApiResponse create(@RequestBody CredentialCreatePayload payload) {
            try {
//                if(orgRepository.findById(payload.getOrganisation().getId()) == null){
//                    payload.setOrganisation(orgRepository.save(payload.getOrganisation()));
//                }
                Credential credential = new Credential.Builder()
                        .setEmail(payload.getEmail())
                        .setPassword(payload.getPassword())
                        .setUser(payload.getUser())
                        .build();
                Credential newCredential = credentialRepository.save(credential);
                return new ApiResponse(true, newCredential, BASE_CODE + "create.success");
            } catch (Exception e) {
                e.printStackTrace();
                return new ApiResponse(false, null, BASE_CODE + "create.error");
            }
    }

    @PutMapping("/update")
    public ApiResponse update(@RequestBody CredentialUpdatePayload payload) {
        Credential credential = credentialRepository.findById(payload.getId());
        if(credential != null){
            Credential newCredential = new Credential(payload);
            Credential freshCredential = credentialRepository.save(newCredential);
            return new ApiResponse(true, freshCredential, null);
        } else {
            return new ApiResponse(false, null, "404");
        }
    }

    @DeleteMapping("/delete/{id}")
    public ApiResponse delete(@PathVariable int id) {
        Credential credentialToDelete = credentialRepository.findById(id);
    if(credentialToDelete != null){
            credentialRepository.deleteById(id);
            return new ApiResponse(true, null, BASE_CODE + "delete.success");
        }else{
            return new ApiResponse(false, null, BASE_CODE + "delete.error");
        }
    }

}
