package com.capg.learningapp.security.copy;

import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;

@Configuration
@EnableWebSecurity
public class SecurityConfig extends WebSecurityConfigurerAdapter {

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http
            .authorizeRequests()
                .antMatchers("/**").permitAll() // Permit access to all endpoints
                .and()
            .csrf().disable() // Disable CSRF for simplicity (you should include CSRF token in production)
            .formLogin().disable() // Disable form login for simplicity
            .httpBasic().disable(); // Disable basic authentication for simplicity
    }
}