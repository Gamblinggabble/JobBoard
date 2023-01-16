package com.example.jobboard.controllers;

import com.example.jobboard.model.JobPost;
import com.example.jobboard.services.JobPostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Collection;

@RestController
@RequestMapping("/jobposts")
public class JobPostController {

    @Autowired
    private JobPostService jobPostService;

    @GetMapping("/{id}")
    public JobPost getById(@PathVariable Long id) {
        System.out.println("ID" + id);
        return jobPostService.findJobPostById(id);
    }

    @GetMapping("")
    public Collection<JobPost> getAll() {
        System.out.println("got to jobposts-controller -> getAll()");
        return jobPostService.findAllJobPosts();
    }

}
