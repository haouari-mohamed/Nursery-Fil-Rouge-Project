package com.example.nurseryFilrouge.service;

import com.example.nurseryFilrouge.model.Panier;
import com.example.nurseryFilrouge.model.Creche;
import com.example.nurseryFilrouge.repository.PanierRepository;
import com.example.nurseryFilrouge.repository.ParentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PanierService {
    @Autowired
    private PanierRepository panierRepository;
    @Autowired
    private ParentRepository parentRepository;

    public Panier createPanier(Long parentId) {
        Panier panier = new Panier();
        parentRepository.findById(parentId).ifPresent(panier::setParent);
        return panierRepository.save(panier);
    }

    public void addCrecheToCart(Long panierId, Creche creche) {
        panierRepository.findById(panierId).ifPresent(panier -> {
            panier.getCreches().add(creche);
            panierRepository.save(panier);
        });
    }

    public void removeCrecheFromCart(Long panierId, Creche creche) {
        panierRepository.findById(panierId).ifPresent(panier -> {
            panier.getCreches().remove(creche);
            panierRepository.save(panier);
        });
    }


    public List<Creche> getCrechesInPanier(Long panierId) {
        return panierRepository.findById(panierId)
                .map(Panier::getCreches)
                .orElse(null);
    }

    public void clearPanier(Long panierId) {
        panierRepository.findById(panierId).ifPresent(panier -> {
            panier.getCreches().clear();
            panierRepository.save(panier);
        });
    }
}