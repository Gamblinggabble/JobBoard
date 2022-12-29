package com.example.jobboard.controllers;

import com.example.jobboard.model.JobPost;
import com.example.jobboard.services.JobPostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import java.util.Collection;

@RestController
public class JobPostController {

    @Autowired
    private JobPostService jobPostService;

    @GetMapping("/jobposts/{id}")
    public JobPost getById(@PathVariable Long id) {
        System.out.println("ID" + id);
        return jobPostService.findJobPostById(id);
    }

    @GetMapping("/jobposts")
    public Collection<JobPost> getAll() {
        return jobPostService.findAllJobPosts();
    }

}
