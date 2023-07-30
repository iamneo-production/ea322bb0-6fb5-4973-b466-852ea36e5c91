package com.example.springapp.service;

import com.example.springapp.model.Employer;
import com.example.springapp.model.JobSeekers;
import com.example.springapp.repository.JobSeekersRepository;
import com.example.springapp.repository.UserRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class JobSeekersService {
    @Autowired
    JobSeekersRepository jobSeekersRepository;
    @Autowired
    UserRepository userRepository;
    public  List<Map<String,String>>  getAllJobSeekers() {
        List<JobSeekers>  allEmployers = jobSeekersRepository.findAll();
        List<Map<String,String>> allJobSeekersList = new ArrayList<>();
        for(JobSeekers e: allEmployers){
            Map<String,String> jobSeekerDetails = new HashMap<>();
            jobSeekerDetails.put("id", Long.toString(e.getId()));
            jobSeekerDetails.put("name", e.getName());
            jobSeekerDetails.put("skills", e.getSkills());            
            jobSeekerDetails.put("experience", e.getExperience());
            jobSeekerDetails.put("location", e.getLocation());
            jobSeekerDetails.put("userId", Long.toString(e.getId()));
            jobSeekerDetails.put("emailId", userRepository.getReferenceById(e.getUserId()).getUsername());
            allJobSeekersList.add(jobSeekerDetails);
        }
        return allJobSeekersList;
    }

    public JobSeekers createJobSeeker(JobSeekers jobSeeker) {
            return jobSeekersRepository.save(jobSeeker);
    }

    public JobSeekers editJobSeeker(Long id, JobSeekers jobSeeker) {
        JobSeekers existingJobSeeker = jobSeekersRepository.findById(id).get();
        if (existingJobSeeker != null) {
//             Update the properties of the existing job-seeker
            existingJobSeeker.setName(jobSeeker.getName());
            existingJobSeeker.setSkills(jobSeeker.getSkills());
            existingJobSeeker.setExperience(jobSeeker.getExperience());
            existingJobSeeker.setLocation(jobSeeker.getLocation());
            // Save the updated job-seeker
            return jobSeekersRepository.save(existingJobSeeker);
        }
        return null;
    }

    public List<Map<String,String>> getJobSeekerById(Long id) {
        List<Map<String,String>> jobseeker = new ArrayList<>();
        Map<String,String> jobSeekerDetails = new HashMap<>();
        JobSeekers js=jobSeekersRepository.findById(id).orElse(null);
        if(js!=null) {
            jobSeekerDetails.put("id", Long.toString(js.getId()));
            jobSeekerDetails.put("name", js.getName());
            jobSeekerDetails.put("skills", js.getSkills());            
            jobSeekerDetails.put("experience", js.getExperience());
            jobSeekerDetails.put("location", js.getLocation());
            jobSeekerDetails.put("userId", Long.toString(js.getId()));
            jobSeekerDetails.put("emailId", userRepository.getReferenceById(js.getUserId()).getUsername());
            jobseeker.add(jobSeekerDetails);
        }
        return jobseeker;
        
    }

    public Map<String,String> deleteJobSeeker(Long id) {
        Map<String,String> response = new HashMap<>();
        try{
            jobSeekersRepository.deleteById(id);
            response.put("message", "Job Seeker Deletion Successful");
        }
        catch(Exception e){
            response.put("message", "Job Seeker Deletion Failed");
        }
        return response;
    }
}
