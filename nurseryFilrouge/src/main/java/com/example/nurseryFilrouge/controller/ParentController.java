package com.example.nurseryFilrouge.controller;
import com.example.nurseryFilrouge.model.Child;
import com.example.nurseryFilrouge.model.Creche;
import com.example.nurseryFilrouge.model.Parent;
import com.example.nurseryFilrouge.model.Reservation;
import com.example.nurseryFilrouge.service.ParentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Date;
import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api/parents")
public class ParentController {

    @Autowired
    private ParentService parentService;

    @GetMapping("/creches")
    public ResponseEntity<List<Creche>> rechercherCreche(@RequestParam String ville) {
        return ResponseEntity.ok(parentService.rechercherCreche(ville));
    }

    @PostMapping("/reservations")
    public ResponseEntity<Reservation> reserverPlace(
            @RequestBody Parent parent,
            @RequestParam Long crecheId,
            @RequestParam @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) Date dateDebut,
            @RequestParam @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) Date dateFin) {
        Creche creche = new Creche(); // You might want to fetch this from a service
        creche.setId(crecheId);
        return ResponseEntity.ok(parentService.reserverPlace(parent, creche, dateDebut, dateFin));
    }

    @PutMapping("/{parentId}")
    public ResponseEntity<Void> updateProfile(@PathVariable Long parentId, @RequestBody Parent updatedParent) {
        parentService.updateProfile(parentId, updatedParent);
        return ResponseEntity.ok().build();
    }

    @PostMapping("/{parentId}/children")
    public ResponseEntity<Void> addChild(@PathVariable Long parentId, @RequestBody Child child) {
        parentService.addChild(parentId, child);
        return ResponseEntity.ok().build();
    }

    @GetMapping("/{parentId}/children")
    public ResponseEntity<List<Child>> getChildren(@PathVariable Long parentId) {
        return ResponseEntity.ok(parentService.getChildren(parentId));
    }
}
