package com.example.nurseryFilrouge.service;


import com.example.nurseryFilrouge.model.Reservation;
import com.example.nurseryFilrouge.model.enums.ReservationStatus;
import com.example.nurseryFilrouge.repository.CrecheRepository;
import com.example.nurseryFilrouge.repository.ParentRepository;
import com.example.nurseryFilrouge.repository.ReservationRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;
import java.util.Optional;

@Service
public class ReservationService {
    @Autowired
    private ReservationRepository reservationRepository;
    @Autowired
    private ParentRepository parentRepository;
    @Autowired
    private CrecheRepository crecheRepository;

    public Reservation createReservation(Long parentId, Long crecheId, Date dateDebut, Date dateFin) {
        Reservation reservation = new Reservation();
        parentRepository.findById(parentId).ifPresent(reservation::setParent);
        crecheRepository.findById(crecheId).ifPresent(reservation::setCreche);
        reservation.setDateDebut(dateDebut);
        reservation.setDateFin(dateFin);
       reservation.setStatus(ReservationStatus.EN_ATTENTE);
        return reservationRepository.save(reservation);
    }

    public void confirmReservation(Long reservationId) {
        Optional<Reservation> reservation = reservationRepository.findById(reservationId);
        if (reservation.isPresent()) {
            reservation.get().setStatus(ReservationStatus.CONFIRMEE);
            reservationRepository.save(reservation.get());
        }
    }

    public void cancelReservation(Long reservationId) {
        Optional<Reservation> reservation = reservationRepository.findById(reservationId);
        if (reservation.isPresent()) {
            reservation.get().setStatus(ReservationStatus.ANNULEE);
            reservationRepository.save(reservation.get());
        }
    }

    public List<Reservation> getParentReservations(Long parentId) {
        return reservationRepository.findByParentId(parentId);
    }

    public List<Reservation> getCrecheReservations(Long crecheId) {
        return reservationRepository.findByCrecheId(crecheId);
    }
}
