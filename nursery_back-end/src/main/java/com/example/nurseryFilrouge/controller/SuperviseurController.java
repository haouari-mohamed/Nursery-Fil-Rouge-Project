package com.example.nurseryFilrouge.controller;
import com.example.nurseryFilrouge.model.Creche;
import com.example.nurseryFilrouge.model.Superviseur;
import com.example.nurseryFilrouge.service.SuperviseurService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api/superviseurs")
public class SuperviseurController {

    @Autowired
    private SuperviseurService superviseurService;

    @PostMapping("/register")
    public ResponseEntity<Superviseur> registerSuperviseur(@RequestBody Superviseur superviseur) {
        return ResponseEntity.ok(superviseurService.registerSuperviseur(superviseur));
    }
    @GetMapping("/all")
    public List<Superviseur> getAllSuperviseurs() {
        return superviseurService.getAllSuperviseur();
    }


    @GetMapping ("/hello")
        public String hello() {
        return "hello world ";
        }

    @PutMapping("/creches/{crecheId}")
    public ResponseEntity<Void> gererInformations(@PathVariable Long crecheId, @RequestBody Creche updatedCreche) {
        superviseurService.gererInformations(crecheId, updatedCreche);
        return ResponseEntity.ok().build();
    }
}