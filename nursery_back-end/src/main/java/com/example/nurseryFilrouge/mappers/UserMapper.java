package com.example.nurseryFilrouge.mappers;

import com.example.nurseryFilrouge.dtos.UserDTO;
import com.example.nurseryFilrouge.model.User;
import org.springframework.stereotype.Component;

@Component
public class UserMapper {
    public UserDTO toUserDTO(User user) {
        UserDTO userDTO = new UserDTO();
        userDTO.setId(user.getId());
        userDTO.setName(user.getName());
        userDTO.setPrenom(user.getPrenom());
        userDTO.setEmail(user.getEmail());
        userDTO.setType(user.getType());
        return userDTO;
    }

    public User toUser(UserDTO userDTO) {
        User user = new User();
        user.setName(userDTO.getName());
        user.setPrenom(userDTO.getPrenom());
        user.setEmail(userDTO.getEmail());
        user.setPassword(userDTO.getPassword());
        user.setType(userDTO.getType());
        return user;
    }
}
