package com.example.nurseryFilrouge.controller;

import com.example.nurseryFilrouge.model.Creche;
import com.example.nurseryFilrouge.service.CrecheService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api/creches")
public class CrecheController {

    @Autowired
    private CrecheService crecheService;

    @PostMapping("/add")
    public ResponseEntity<Creche> addCreche(@RequestBody Creche creche) {
        Creche newCreche = crecheService.addCreche(creche);
        return ResponseEntity.ok(newCreche);
    }
    @GetMapping("/search")
    public ResponseEntity<List<Creche>> searchCreches(@RequestParam String nom) {
        List<Creche> creches = crecheService.searchCrechesByNom(nom);
        return ResponseEntity.ok(creches);
    }

    @GetMapping("/searchcity")
    public ResponseEntity<List<Creche>> searchCrechesCity(@RequestParam String ville) {
        return ResponseEntity.ok(crecheService.searchCreches(ville));
    }

    @GetMapping("/{crecheId}")
    public ResponseEntity<Creche> getCreche(@PathVariable Long crecheId) {
        Creche creche = crecheService.getCreche(crecheId);
        if (creche != null) {
            return ResponseEntity.ok(creche);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PutMapping("/{crecheId}")
    public ResponseEntity<Void> updateCreche(@PathVariable Long crecheId, @RequestBody Creche updatedCreche) {
        crecheService.updateCreche(crecheId, updatedCreche);
        return ResponseEntity.ok().build();
    }

    @GetMapping
    public ResponseEntity<List<Creche>> getAllCreches() {
        return ResponseEntity.ok(crecheService.getAllCreches());
    }


//    @DeleteMapping("/{crecheId}")
//    public ResponseEntity<Void> deleteCreche(@PathVariable Long crecheId) {
//        crecheService.deleteCreche(crecheId);
//        return ResponseEntity.noContent().build();
//    }

}
