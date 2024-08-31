package com.example.nurseryFilrouge.service;

import com.example.nurseryFilrouge.model.Avis;
import com.example.nurseryFilrouge.repository.AvisRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AvisService {
    @Autowired
    private AvisRepository avisRepository;

    public Avis laisserAvis(Avis avis) {
        return avisRepository.save(avis);
    }

    public List<Avis> getAvisForCreche(Long crecheId) {
        return avisRepository.findByCrecheId(crecheId);
    }
}
