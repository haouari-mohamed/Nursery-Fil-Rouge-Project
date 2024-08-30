package com.example.nurseryFilrouge.model;

import jakarta.persistence.*;
import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Avis {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;
    private int note;
    private String commentaire;

    @ManyToOne
    private Parent parent;

    @ManyToOne
    private Creche creche;
}
