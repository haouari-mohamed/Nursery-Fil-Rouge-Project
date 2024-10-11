package com.example.nurseryFilrouge.repository;

import com.example.nurseryFilrouge.model.Avis;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AvisRepository extends JpaRepository<Avis, Long> {
    List<Avis> findByCrecheId(Long crecheId);
}
