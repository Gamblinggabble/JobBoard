package com.example.jobboard.repos;

import com.example.jobboard.model.Candidate_Auth;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface Candidate_AuthRepository extends JpaRepository<Candidate_Auth, Long> {
}
