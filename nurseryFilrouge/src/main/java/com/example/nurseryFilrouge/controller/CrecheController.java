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

    @GetMapping("/search")
    public ResponseEntity<List<Creche>> searchCreches(@RequestParam String ville) {
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
<<<<<<< refs/remotes/origin/nursery_b_end
=======
    @GetMapping
    public ResponseEntity<List<Creche>> getAllCreches() {
        return ResponseEntity.ok(crecheService.getAllCreches());
    }
    @DeleteMapping("/{crecheId}")
    public ResponseEntity<Void> deleteCreche(@PathVariable Long crecheId) {
        crecheService.deleteCreche(crecheId);
        return ResponseEntity.noContent().build();
    }

>>>>>>> local
}
