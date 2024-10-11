package com.example.nurseryFilrouge.model;

import jakarta.persistence.*;
import lombok.*;

import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Creche {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String nom;
    private String adresse;
    private String codePostal;
    private String ville;
    private int capacite;
    private String horairesOuverture;

    @ElementCollection
    private List<String> services;

    private String tarifs;

    @OneToMany(mappedBy =  "creche")
    private List<Superviseur> superviseurs;

//    @OneToMany(mappedBy = "creche", cascade = CascadeType.ALL, orphanRemoval = true)
//    private List<Child> children;
}
