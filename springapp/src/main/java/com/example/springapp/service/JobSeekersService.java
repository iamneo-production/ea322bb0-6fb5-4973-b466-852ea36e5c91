package com.example.springapp.service;

import com.example.springapp.model.JobSeekers;
import com.example.springapp.repository.JobSeekersRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
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
            existingJobSeeker.setUserId(jobSeeker.getUserId());
            // Save the updated job-seeker
            return jobSeekersRepository.save(existingJobSeeker);
        }
        return null;
    }

    public List<JobSeekers> getJobSeekerById(Long id) {
        List<JobSeekers> jobSeeker=new ArrayList<>();
        JobSeekers js= jobSeekersRepository.findById(id).orElse(null);
//        js.toString();
        if(js!=null) jobSeeker.add(js);
        return jobSeeker;
    }

    public void deleteJobSeeker(Long id) {
        jobSeekersRepository.deleteById(id);
    }
}
