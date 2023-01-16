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

    private String imageUrl;

    @OneToMany(mappedBy = "company")
    private Set<JobPost> jobPosts;

    public Company() {
    }

    public Company(String name, String email, String phoneNumber, String description,
                   String password, Set<JobPost> jobPosts, String imageUrl) {
        this.name = name;
        this.email = email;
        this.phoneNumber = phoneNumber;
        this.description = description;
        this.password = password;
        this.jobPosts = jobPosts;
        this.imageUrl = imageUrl;
    }

    public Long getId() {
        return this.id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public String getDescription() {
        return description;
    }

    public String getPassword() {
        return password;
    }

    public String getImageUrl() {
        return imageUrl;
    }
}
