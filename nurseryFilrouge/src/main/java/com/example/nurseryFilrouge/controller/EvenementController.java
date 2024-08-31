package com.example.nurseryFilrouge.controller;

import com.example.nurseryFilrouge.model.Evenement;
import com.example.nurseryFilrouge.service.EvenementService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.List;

@RestController
@RequestMapping("/api/evenements")
public class EvenementController {

    @Autowired
    private EvenementService evenementService;

    @GetMapping
    public List<Evenement> getAllEvenements() {
        return evenementService.getAllEvenements();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Evenement> getEvenementById(@PathVariable int id) {
        return evenementService.getEvenementById(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public ResponseEntity<Evenement> createEvenement(@RequestBody Evenement evenement) {
        Evenement savedEvenement = evenementService.saveEvenement(evenement);
        return ResponseEntity.status(HttpStatus.CREATED).body(savedEvenement);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Evenement> updateEvenement(@PathVariable int id, @RequestBody Evenement evenement) {
        return evenementService.getEvenementById(id)
                .map(existingEvenement -> {
                    evenement.setId(id);
                    return ResponseEntity.ok(evenementService.saveEvenement(evenement));
                })
                .orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteEvenement(@PathVariable int id) {
        if (evenementService.getEvenementById(id).isPresent()) {
            evenementService.deleteEvenement(id);
            return ResponseEntity.noContent().build();
        }
        return ResponseEntity.notFound().build();
    }

    @GetMapping("/date/{date}")
    public List<Evenement> getEvenementsByDate(@PathVariable @DateTimeFormat(pattern = "yyyy-MM-dd") Date date) {
        return evenementService.getEvenementsByDate(date);
    }

    @GetMapping("/creche/{crecheId}")
    public List<Evenement> getEvenementsByCreche(@PathVariable int crecheId) {
        return evenementService.getEvenementsByCreche(crecheId);
    }
}