package be.prest;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.scheduling.annotation.*;

@SpringBootApplication
@EnableScheduling
public class PrestApplication {

    public static void main(String[] args) {
        SpringApplication.run(PrestApplication.class, args);
    }

}
