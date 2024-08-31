package com.example.nurseryFilrouge.service;


import com.example.nurseryFilrouge.model.Creche;
import com.example.nurseryFilrouge.model.Superviseur;
import com.example.nurseryFilrouge.repository.CrecheRepository;
import com.example.nurseryFilrouge.repository.SuperviseurRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class SuperviseurService {
    @Autowired
    private SuperviseurRepository superviseurRepository;
    @Autowired
    private CrecheRepository crecheRepository;

    public Superviseur registerSuperviseur(Superviseur superviseur) {
        return superviseurRepository.save(superviseur);
    }

    public void gererInformations(Long crecheId, Creche updatedCreche) {
        crecheRepository.findById(crecheId).ifPresent(creche -> {
            creche.setNom(updatedCreche.getNom());
            creche.setAdresse(updatedCreche.getAdresse());
            creche.setCodePostal(updatedCreche.getCodePostal());
            creche.setVille(updatedCreche.getVille());
            creche.setCapacite(updatedCreche.getCapacite());
            creche.setHorairesOuverture(updatedCreche.getHorairesOuverture());
            creche.setServices(updatedCreche.getServices());
            creche.setTarifs(updatedCreche.getTarifs());
            crecheRepository.save(creche);
        });
    }
}