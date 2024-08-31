package com.example.nurseryFilrouge.service;

import com.example.nurseryFilrouge.model.Creche;
import com.example.nurseryFilrouge.repository.CrecheRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CrecheService {
    @Autowired
    private CrecheRepository crecheRepository;

    public List<Creche> searchCreches(String ville) {
        return crecheRepository.findByVille(ville);
    }

    public Creche getCreche(Long crecheId) {
        return crecheRepository.findById(crecheId).orElse(null);
    }

    public void updateCreche(Long crecheId, Creche updatedCreche) {
        Optional<Creche> existingCreche = crecheRepository.findById(crecheId);
        if (existingCreche.isPresent()) {
            Creche creche = existingCreche.get();
            creche.setNom(updatedCreche.getNom());
            creche.setAdresse(updatedCreche.getAdresse());
            creche.setCodePostal(updatedCreche.getCodePostal());
            creche.setVille(updatedCreche.getVille());
            creche.setCapacite(updatedCreche.getCapacite());
            creche.setHorairesOuverture(updatedCreche.getHorairesOuverture());
            creche.setServices(updatedCreche.getServices());
            creche.setTarifs(updatedCreche.getTarifs());
            crecheRepository.save(creche);
        }
    }
}