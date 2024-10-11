package com.example.nurseryFilrouge.model;

import com.example.nurseryFilrouge.model.enums.ReservationStatus;
import jakarta.persistence.*;
import lombok.*;

import java.util.Date;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Reservation {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @ManyToOne
    private Parent parent;

    @ManyToOne
    private Creche creche;

    private Date dateDebut;
    private Date dateFin;

    @Enumerated(EnumType.STRING)
    private ReservationStatus status;
}
