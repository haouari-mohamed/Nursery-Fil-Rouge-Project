package com.example.nurseryFilrouge.repository;

import com.example.nurseryFilrouge.model.Creche;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CrecheRepository extends JpaRepository<Creche, Long> {}
