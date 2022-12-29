package com.example.jobboard.controllers;

import com.example.jobboard.model.JobPost;
import com.example.jobboard.services.JobPostService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class JobPostController {

    @Autowired
    private JobPostService service;

    @GetMapping("/jobPost/{id}")
    public JobPost searchJobPostById(@PathVariable Integer id) {
        System.out.println("ID" + id);
        return service.searchJobPostById(id);
    }

}
