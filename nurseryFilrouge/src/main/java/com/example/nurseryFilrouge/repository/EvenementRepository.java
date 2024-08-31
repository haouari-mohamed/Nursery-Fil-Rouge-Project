package com.example.nurseryFilrouge.repository;

import com.example.nurseryFilrouge.model.Evenement;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Date;
import java.util.List;

@Repository
public interface EvenementRepository extends JpaRepository<Evenement, Integer> {
    List<Evenement> findByDate(Date date);
    List<Evenement> findByCrecheId(int crecheId);
}
