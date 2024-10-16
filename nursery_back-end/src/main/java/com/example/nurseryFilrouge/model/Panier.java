package com.example.nurseryFilrouge.model;

import jakarta.persistence.*;
import lombok.*;

import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Panier {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @OneToOne
    private Parent parent;


    @OneToMany(cascade = {CascadeType.PERSIST, CascadeType.MERGE})
    private List<Creche> creches = new ArrayList<>();





}
