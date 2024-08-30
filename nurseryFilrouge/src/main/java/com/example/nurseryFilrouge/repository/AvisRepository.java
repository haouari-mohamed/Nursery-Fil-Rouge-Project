package com.example.nurseryFilrouge.repository;

import com.example.nurseryFilrouge.model.Avis;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AvisRepository extends JpaRepository<Avis, Long> {}
