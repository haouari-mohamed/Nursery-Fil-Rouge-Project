package com.example.nurseryFilrouge.repository;

import com.example.nurseryFilrouge.model.Child;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ChildRepository extends JpaRepository<Child, Long> {}

