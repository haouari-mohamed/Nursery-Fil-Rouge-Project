package com.example.nurseryFilrouge.repository;

import com.example.nurseryFilrouge.model.Panier;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PanierRepository extends JpaRepository<Panier, Long> {}
