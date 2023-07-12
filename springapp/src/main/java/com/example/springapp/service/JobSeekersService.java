package com.example.springapp.service;

import com.example.springapp.model.JobSeekers;
import com.example.springapp.repository.JobSeekersRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class JobSeekersService {
    @Autowired
    JobSeekersRepository jobSeekersRepository;
    public List<JobSeekers> getAllJobSeekers() {
        return jobSeekersRepository.findAll();
    }

    public JobSeekers createJobSeeker(JobSeekers jobSeeker) {
        return jobSeekersRepository.save(jobSeeker);
    }

    public JobSeekers editJobSeeker(JobSeekers jobSeeker) {
        JobSeekers existingJobSeeker = jobSeekersRepository.findById(jobSeeker.getId()).orElse(null);
        if (existingJobSeeker != null) {
//             Update the properties of the existing job-seeker
            existingJobSeeker.setName(jobSeeker.getName());
            existingJobSeeker.setSkills(jobSeeker.getSkills());
            existingJobSeeker.setExperience(jobSeeker.getExperience());
            existingJobSeeker.setLocation(jobSeeker.getLocation());
            existingJobSeeker.setUser(jobSeeker.getUser());
            // Save the updated job-seeker
            return jobSeekersRepository.save(existingJobSeeker);
        }
        return null;
    }

    public JobSeekers getJobSeekerById(Long id) {
        return jobSeekersRepository.findById(id).orElse(null);
    }

    public void deleteJobSeeker(Long id) {
        jobSeekersRepository.deleteById(id);
    }
}
