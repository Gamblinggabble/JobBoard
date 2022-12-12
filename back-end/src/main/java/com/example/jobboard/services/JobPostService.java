package com.example.jobboard.services;

import com.example.jobboard.model.JobPost;
import com.example.jobboard.repos.JobPostRepository;

import java.util.Optional;
import java.util.logging.Level;
import java.util.logging.Logger;

import static java.util.Optional.empty;

public class JobPostService {

    private JobPostRepository jobPostRepository;
    private final static Logger LOGGER =
            Logger.getLogger(Logger.GLOBAL_LOGGER_NAME);


    private void saveJobPostToDb(JobPost jobPost) {
        try {
            jobPostRepository.save(jobPost);
        } catch (Exception e) {
            LOGGER.log(Level.SEVERE, String.format("JobPost {} with id {} could not be saved in Database", jobPost.getTitle(), jobPost.getId()));
        }
    }


    private void updateJobPost(JobPost newJobPost) { // they have to be with the same id
        try {
            if (jobPostRepository.existsById(newJobPost.getId())) {
                JobPost oldJobPost = jobPostRepository.getReferenceById(newJobPost.getId());
                oldJobPost.setCompany(newJobPost.getCompany());
                oldJobPost.setDate(newJobPost.getDate());
                oldJobPost.setDescription(newJobPost.getDescription());
                oldJobPost.setTitle(newJobPost.getTitle());
            } else {
                LOGGER.log(Level.SEVERE, "There is no job post with id:{}.", newJobPost.getId());
            }
        } catch (Exception e) {
            LOGGER.log(Level.WARNING, "The job post {} could not be updated!", newJobPost.getTitle());
        }
    }

    public Optional<Integer> searchJobPostById(Integer id) {
        try {
            Optional<JobPost> jobPostData = jobPostRepository.findJobPostsById(id);
            jobPostData.stream().findFirst().map(JobPost::getId);
        } catch (Exception e) {
            LOGGER.log(Level.WARNING, "A job post with id {} was not found!", id);
        }
        return empty();
    }


}

