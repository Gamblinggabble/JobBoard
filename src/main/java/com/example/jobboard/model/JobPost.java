package com.example.jobboard.model;

import javax.persistence.*;
import java.time.LocalDate;

@Entity
public class JobPost {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Integer id;

    private String title;

    @ManyToOne
    private Company company;

    private LocalDate date;

    private String description;

    public JobPost() {
    }

    public JobPost(String title, Company company, LocalDate date, String description) {
        this.title = title;
        this.company = company;
        this.date = date;
        this.description = description;
    }

}
