package com.example.nurseryFilrouge.repository;

import com.example.nurseryFilrouge.model.Superviseur;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SuperviseurRepository extends JpaRepository<Superviseur, Long> {}

