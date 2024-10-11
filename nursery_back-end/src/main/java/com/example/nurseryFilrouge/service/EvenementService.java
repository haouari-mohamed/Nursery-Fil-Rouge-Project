package com.example.nurseryFilrouge.service;

import com.example.nurseryFilrouge.model.Evenement;
import com.example.nurseryFilrouge.repository.EvenementRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;
import java.util.Optional;

@Service
public class EvenementService {

    @Autowired
    private EvenementRepository evenementRepository;

    public List<Evenement> getAllEvenements() {
        return evenementRepository.findAll();
    }

    public Optional<Evenement> getEvenementById(int id) {
        return evenementRepository.findById(id);
    }

    public Evenement saveEvenement(Evenement evenement) {
        return evenementRepository.save(evenement);
    }

    public void deleteEvenement(int id) {
        evenementRepository.deleteById(id);
    }

    public List<Evenement> getEvenementsByDate(Date date) {
        return evenementRepository.findByDate(date);
    }

    public List<Evenement> getEvenementsByCreche(int crecheId) {
        return evenementRepository.findByCrecheId(crecheId);
    }
}