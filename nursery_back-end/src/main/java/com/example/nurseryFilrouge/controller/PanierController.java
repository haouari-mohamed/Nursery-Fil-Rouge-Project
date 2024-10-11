package com.example.nurseryFilrouge.controller;

import com.example.nurseryFilrouge.model.Creche;
import com.example.nurseryFilrouge.model.Panier;
import com.example.nurseryFilrouge.service.PanierService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api/paniers")
public class PanierController {

    @Autowired
    private PanierService panierService;

    @PostMapping
    public ResponseEntity<Panier> createPanier(@RequestParam Long parentId) {
        return ResponseEntity.ok(panierService.createPanier(parentId));
    }

    @PostMapping("/{panierId}/creches")
    public ResponseEntity<Void> addCrecheToCart(@PathVariable Long panierId, @RequestBody Creche creche) {
        panierService.addCrecheToCart(panierId, creche);
        return ResponseEntity.ok().build();
    }

    @DeleteMapping("/{panierId}/creches")
    public ResponseEntity<Void> removeCrecheFromCart(@PathVariable Long panierId, @RequestBody Creche creche) {
        panierService.removeCrecheFromCart(panierId, creche);
        return ResponseEntity.ok().build();
    }

    @GetMapping("/{panierId}/creches")
    public ResponseEntity<List<Creche>> getCrechesInPanier(@PathVariable Long panierId) {
        return ResponseEntity.ok(panierService.getCrechesInPanier(panierId));
    }

    @DeleteMapping("/{panierId}")
    public ResponseEntity<Void> clearPanier(@PathVariable Long panierId) {
        panierService.clearPanier(panierId);
        return ResponseEntity.ok().build();
    }
}
