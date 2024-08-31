package com.example.nurseryFilrouge.repository;

import com.example.nurseryFilrouge.model.Creche;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CrecheRepository extends JpaRepository<Creche, Long> {
    List<Creche> findByVille(String ville);
}
