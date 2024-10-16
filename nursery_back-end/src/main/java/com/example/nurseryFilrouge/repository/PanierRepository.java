package com.example.nurseryFilrouge.repository;

import com.example.nurseryFilrouge.model.Creche;
import com.example.nurseryFilrouge.model.Panier;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PanierRepository extends JpaRepository<Panier, Long> {
    @Query("SELECT c FROM Panier p JOIN p.creches c")
    List<Creche> findAllCrechesInAllPaniers();
}
