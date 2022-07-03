package be.prest.Authentification.config;
import org.springframework.http.*;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.oauth2.config.annotation.web.configuration.EnableResourceServer;
import org.springframework.security.oauth2.config.annotation.web.configuration.ResourceServerConfigurerAdapter;
import org.springframework.web.bind.annotation.RestController;

@EnableResourceServer
@RestController
public class RessourceServerConfiguration extends ResourceServerConfigurerAdapter {
    @Override
    public void configure(HttpSecurity http) throws Exception {
        http.cors().and().csrf().disable();
        http.authorizeRequests().antMatchers("/login","/oauth/token", "/account/signup", "/account/signin","/account/refresh").permitAll();
        //possibilité que de lire sur ces url sans connection
        http.authorizeRequests().antMatchers(HttpMethod.GET, "/category/**", "/commentary/**", "/restaurant/**", "/newsRestaurant/**").permitAll();
        http.authorizeRequests().anyRequest().authenticated();
    }
}
