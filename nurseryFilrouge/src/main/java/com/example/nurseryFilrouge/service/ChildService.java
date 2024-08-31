package com.example.nurseryFilrouge.service;

import com.example.nurseryFilrouge.model.Child;
import com.example.nurseryFilrouge.repository.ChildRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ChildService {
    @Autowired
    private ChildRepository childRepository;

    public Child registerChild(Child child) {
        return childRepository.save(child);
    }

    public void updateChild(Long childId, Child updatedChild) {
        childRepository.findById(childId).ifPresent(child -> {
            child.setNom(updatedChild.getNom());
            child.setPrenom(updatedChild.getPrenom());
            child.setAge(updatedChild.getAge());
            childRepository.save(child);
        });
    }
}