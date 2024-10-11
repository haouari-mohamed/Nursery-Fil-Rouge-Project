package com.example.nurseryFilrouge.controller;

import com.example.nurseryFilrouge.model.Administration;
import com.example.nurseryFilrouge.model.Creche;
import com.example.nurseryFilrouge.model.User;
import com.example.nurseryFilrouge.service.AdministrationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api/admin")
public class AdminController {

    @Autowired
    private AdministrationService administrationService;

    @PostMapping("/register")
    public ResponseEntity<Administration> registerAdministration(@RequestBody Administration administration) {
        Administration registeredAdmin = administrationService.registerAdministration(administration);
        return ResponseEntity.ok(registeredAdmin);
    }

    @PostMapping("/creche")
    public ResponseEntity<Void> gererCreches(@RequestBody Creche nouvelleCreche) {
        administrationService.gererCreches(nouvelleCreche);
        return ResponseEntity.ok().build();
    }

    @PutMapping("/validate-user/{userId}")
    public ResponseEntity<Void> validerInscriptions(@PathVariable Long userId) {
        administrationService.validerInscriptions(userId);
        return ResponseEntity.ok().build();
    }

    @GetMapping("/users")
    public ResponseEntity<List<User>> surveillerActivites() {
        List<User> users = administrationService.surveillerActivites();
        return ResponseEntity.ok(users);
    }



}
