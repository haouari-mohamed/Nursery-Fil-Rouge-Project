package com.example.nurseryFilrouge.controller;
import com.example.nurseryFilrouge.model.Reservation;
import com.example.nurseryFilrouge.service.ReservationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.List;

@RestController
@RequestMapping("/api/reservations")
public class ReservationController {

    @Autowired
    private ReservationService reservationService;

    @PostMapping
    public ResponseEntity<Reservation> createReservation(
            @RequestParam Long parentId,
            @RequestParam Long crecheId,
            @RequestParam @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) Date dateDebut,
            @RequestParam @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) Date dateFin) {
        return ResponseEntity.ok(reservationService.createReservation(parentId, crecheId, dateDebut, dateFin));
    }

    @PutMapping("/{reservationId}/confirm")
    public ResponseEntity<Void> confirmReservation(@PathVariable Long reservationId) {
        reservationService.confirmReservation(reservationId);
        return ResponseEntity.ok().build();
    }

    @PutMapping("/{reservationId}/cancel")
    public ResponseEntity<Void> cancelReservation(@PathVariable Long reservationId) {
        reservationService.cancelReservation(reservationId);
        return ResponseEntity.ok().build();
    }

    @GetMapping("/parent/{parentId}")
    public ResponseEntity<List<Reservation>> getParentReservations(@PathVariable Long parentId) {
        return ResponseEntity.ok(reservationService.getParentReservations(parentId));
    }

    @GetMapping("/creche/{crecheId}")
    public ResponseEntity<List<Reservation>> getCrecheReservations(@PathVariable Long crecheId) {
        return ResponseEntity.ok(reservationService.getCrecheReservations(crecheId));
    }
}
