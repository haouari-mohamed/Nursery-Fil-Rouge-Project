package com.example.nurseryFilrouge.service;

import com.example.nurseryFilrouge.model.Administration;
import com.example.nurseryFilrouge.model.Creche;
import com.example.nurseryFilrouge.model.User;
import com.example.nurseryFilrouge.repository.AdministrationRepository;
import com.example.nurseryFilrouge.repository.CrecheRepository;
import com.example.nurseryFilrouge.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AdministrationService {
    @Autowired
    private AdministrationRepository administrationRepository;
    @Autowired
    private CrecheRepository crecheRepository;
    @Autowired
    private UserRepository userRepository;

    public Administration registerAdministration(Administration administration) {
        return administrationRepository.save(administration);
    }

    public void gererCreches(Creche nouvelleCreche) {
        crecheRepository.save(nouvelleCreche);
    }

    public void validerInscriptions(Long userId) {
        userRepository.findById(userId).ifPresent(user -> {
            user.setValidated(true);
            userRepository.save(user);
        });
    }

    public List<User> surveillerActivites() {
        return userRepository.findAll();
    }
}

