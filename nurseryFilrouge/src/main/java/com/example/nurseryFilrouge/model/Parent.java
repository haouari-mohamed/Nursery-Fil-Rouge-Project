package com.example.nurseryFilrouge.model;

import jakarta.persistence.Entity;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;
import lombok.*;

import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(callSuper = true)
@ToString(callSuper = true)
@Entity
public class Parent extends User {
    private String adresse;
    private String codePostal;
    private String ville;

    @OneToMany(mappedBy = "parent")
    private List<Child> enfants;

    @OneToOne(mappedBy = "parent")
    private Panier panier;
}
