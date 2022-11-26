package com.example.jobboard.model;

import javax.persistence.*;

@Entity
public class JobPostCategoryType {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column(unique = true)
    private String name;

    public JobPostCategoryType() {
    }

    public JobPostCategoryType(String name) {
        this.name = name;
    }
}