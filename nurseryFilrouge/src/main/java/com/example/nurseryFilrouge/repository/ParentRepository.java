package com.example.nurseryFilrouge.repository;

import com.example.nurseryFilrouge.model.Parent;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ParentRepository extends JpaRepository<Parent, Long> {}

