package com.example.jobboard.model;

import javax.persistence.*;
import java.util.Set;

@Entity
public class Company {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private String name;

    private String email;

    private String phoneNumber;

    private String description;

    private String password;

    @OneToMany
    private Set<JobPost> jobPosts;

    public Company() {
    }

    public Company(String name, String email, String phoneNumber, String description,
                   String password, Set<JobPost> jobPosts) {
        this.name = name;
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.description = description;
        this.password = password;
        this.jobPosts = jobPosts;
    }
}
