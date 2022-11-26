package com.example.jobboard.model;

import javax.persistence.*;

@Entity
public class Candidate_Auth {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private String name;

    private String email;

    private String password;

    public Candidate_Auth() {
    }

    public Candidate_Auth(Long id, String name, String email, String password) {
        this.id = id;
        this.name = name;
        this.email = email;
        this.password = password;
    }
}
