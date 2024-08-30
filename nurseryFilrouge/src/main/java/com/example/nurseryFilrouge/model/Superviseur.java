package com.example.nurseryFilrouge.model;

import jakarta.persistence.Entity;
import jakarta.persistence.ManyToOne;
import lombok.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(callSuper = true)
@ToString(callSuper = true)
@Entity
//@Table(name ="superviseur")
public class Superviseur extends  User {
    @ManyToOne
    private Creche creche;
    private String profil;

}
