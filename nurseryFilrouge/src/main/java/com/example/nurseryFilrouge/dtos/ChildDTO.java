package com.example.nurseryFilrouge.dtos;

import lombok.Data;

@Data
public class ChildDTO {
    private Long id;
    private String nom;
    private String prenom;
    private String age;
    private Long parentId;
    private Long crecheId;
}