package com.example.jobboard.model;

import javax.persistence.*;

@Entity
public class JobPostApplication {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @ManyToOne
    private JobPost jobPost;

//    @ManyToOne
//    @Nullable
//    private Profile profile;

    private String firstName;

    private String lastName;

    private String email;

    private boolean favoured;

    public JobPostApplication() {
    }

    public JobPostApplication(Long applicationId, JobPost jobPost, String firstName, String lastName, String email, boolean favoured) {
        this.id = applicationId;
        this.jobPost = jobPost;
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.favoured = favoured;
    }

    public Long getId() {
        return id;
    }

    public JobPost getJobPost() {
        return jobPost;
    }

//    public Profile getProfile() {
//        return profile;
//    }

    public String getFirstName() {
        return firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public String getEmail() {
        return email;
    }

    public boolean isFavoured() {
        return favoured;
    }

    public void setId(Long applicationId) {
        this.id = applicationId;
    }

    public void setJobPost(JobPost jobPost) {
        this.jobPost = jobPost;
    }

//    public void setProfile(Profile profile) {
//        this.profile = profile;
//    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public void setFavoured(boolean favoured) {
        this.favoured = favoured;
    }
}
