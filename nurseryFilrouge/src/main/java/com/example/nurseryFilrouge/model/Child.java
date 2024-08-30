package com.example.nurseryFilrouge.model;

import jakarta.persistence.*;
import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Child {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private String nom;
    private String prenom;
    private String age;

    @ManyToOne
    private Parent parent;

    @ManyToOne
    private Creche creche;


}
