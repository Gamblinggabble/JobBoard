package com.example.jobboard;

import com.example.jobboard.repos.JobPostCategoryTypeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class JobBoardApplication {

    @Autowired
    public JobPostCategoryTypeRepository jobPostCategoryTypeRepository;

    public static void main(String[] args) {
        SpringApplication.run(JobBoardApplication.class, args);
    }

}
