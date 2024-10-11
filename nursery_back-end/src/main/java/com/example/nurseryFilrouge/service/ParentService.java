package com.example.nurseryFilrouge.service;


import com.example.nurseryFilrouge.model.Child;
import com.example.nurseryFilrouge.model.Creche;
import com.example.nurseryFilrouge.model.Parent;
import com.example.nurseryFilrouge.model.Reservation;
import com.example.nurseryFilrouge.model.enums.ReservationStatus;
import com.example.nurseryFilrouge.repository.ChildRepository;
import com.example.nurseryFilrouge.repository.CrecheRepository;
import com.example.nurseryFilrouge.repository.ParentRepository;
import com.example.nurseryFilrouge.repository.ReservationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;
import java.util.Optional;

@Service
public class ParentService {
    @Autowired
    private ParentRepository parentRepository;
    @Autowired
    private CrecheRepository crecheRepository;
    @Autowired
    private ReservationRepository reservationRepository;
    @Autowired
    private ChildRepository childRepository;

    public List<Creche> rechercherCreche(String ville) {
        // Logique pour rechercher des creches dans une ville
        return crecheRepository.findByVille(ville);
    }

    public Reservation reserverPlace(Parent parent, Creche creche, Date dateDebut, Date dateFin) {
        Reservation reservation = new Reservation();
        reservation.setParent(parent);
        reservation.setCreche(creche);
        reservation.setDateDebut(dateDebut);
        reservation.setDateFin(dateFin);
        reservation.setStatus(ReservationStatus.EN_ATTENTE);
        return reservationRepository.save(reservation);
    }



        public void updateProfile(Long parentId, Parent updatedParent) {
            Optional<Parent> existingParent = parentRepository.findById(parentId);
            if (existingParent.isPresent()) {
                Parent parent = existingParent.get();
                parent.setName(updatedParent.getName());
                parent.setPrenom(updatedParent.getPrenom());
                parent.setEmail(updatedParent.getEmail());
                parent.setAdresse(updatedParent.getAdresse());
                parent.setCodePostal(updatedParent.getCodePostal());
                parent.setVille(updatedParent.getVille());
                parentRepository.save(parent);
            }
        }

        public void addChild(Long parentId, Child child) {
            Optional<Parent> parent = parentRepository.findById(parentId);
            if (parent.isPresent()) {
                child.setParent(parent.get());
                childRepository.save(child);
            }
        }

        public List<Child> getChildren(Long parentId) {
            return childRepository.findByParentId(parentId);
        }

//    public List<Creche> rechercherCreche(String ville) {
//        return crecheRepository.findByVille(ville);
//    }



    }
