package com.example.jobboard.controllers;

import com.example.jobboard.model.JobPost;
import com.example.jobboard.services.JobPostService;
import org.springframework.http.ResponseEntity;


public class JobPostController {

    private JobPostService service;

    public ResponseEntity<Integer> searchJobPostById(Integer id) {
        return ResponseEntity.of(service.searchJobPostById(id));
    }

}
