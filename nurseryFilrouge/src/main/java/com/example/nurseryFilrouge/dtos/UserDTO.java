package com.example.nurseryFilrouge.dtos;


import com.example.nurseryFilrouge.model.enums.UserType;
import lombok.Data;

@Data
public class UserDTO {
    private Long id;
    private String name;
    private String prenom;
    private String email;
    private String password;
    private UserType type;
}