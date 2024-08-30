package com.example.nurseryFilrouge.repository;
import com.example.nurseryFilrouge.model.Administration;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AdministrationRepository extends JpaRepository<Administration, Long> {}

