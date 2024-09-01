package com.example.nurseryFilrouge.secruity;

import com.example.nurseryFilrouge.service.UserService;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;

import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.http.SessionCreationPolicy;

import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
@Configuration
@EnableWebSecurity
public class SecurityConfig {

    private final UserService userService;
    private final JwtAuthFilter jwtAuthFilter;

    public SecurityConfig(UserService userService, JwtAuthFilter jwtAuthFilter) {
        this.userService = userService;
        this.jwtAuthFilter = jwtAuthFilter;
    }

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        return http
                .csrf(csrf -> csrf.disable())
                .authorizeHttpRequests(auth -> auth

                        .requestMatchers("/auth/generateToken", "/auth/register").permitAll()
                        .anyRequest().permitAll()

//                        .requestMatchers("/api/auth/**").permitAll()
//                        .requestMatchers("/api/children/**").permitAll()
//                        .requestMatchers("/api/creches/**").permitAll()
//                        .requestMatchers("/api/evenements/**").permitAll()
//                        .requestMatchers("/api/paniers/**").permitAll()
//                        .requestMatchers("/api/parents/**").permitAll()
//                        .requestMatchers("/api/reservations/**").permitAll()
//                        .requestMatchers("/api/superviseurs/**").permitAll()
//                        .anyRequest().authenticated()
             )
                .sessionManagement(sess -> sess.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
                .addFilterBefore(jwtAuthFilter, UsernamePasswordAuthenticationFilter.class)
                .build();
    }

    @Bean
    public AuthenticationManager authenticationManager(AuthenticationConfiguration config) throws Exception {
        return config.getAuthenticationManager();
    }
}