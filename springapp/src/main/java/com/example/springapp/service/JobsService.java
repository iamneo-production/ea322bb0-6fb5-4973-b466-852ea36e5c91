package com.example.springapp.service;

import com.example.springapp.model.*;
import com.example.springapp.repository.EmployersRepository;
import com.example.springapp.repository.JobSeekersRepository;
import com.example.springapp.repository.JobsAppliedRepository;
import com.example.springapp.repository.JobsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;

@Service
public class JobsService {
    @Autowired
    private EmployersRepository employersRepository;
    @Autowired
    private JobsRepository jobsRepository;
    @Autowired
    private JobsAppliedRepository jobsAppliedRepository;
    @Autowired
    private JobSeekersRepository jobSeekersRepository;
    public List<Jobs> getAllJobs() {
        return jobsRepository.findAllJobs();
    }
    public Map<String,String> createJob(Jobs job) {
        Map<String,String> createdResponse = new HashMap<>();
        try{
            Jobs jobs = jobsRepository.save(job);
            createdResponse.put("message","Job Post Success");
        }catch (Exception e){
            createdResponse.put("message","Job Post Failed");
        }
        return createdResponse;
    }
    public List<Jobs> getJobById(Long id) {
        List<Jobs> job=new ArrayList<>();
        Jobs jb= jobsRepository.findById(id).orElse(null);
        if(jb!=null) job.add(jb);
        return job;
    }
    public Jobs editJob(Long id, Jobs job) {
        Jobs existingJob = jobsRepository.findById(id).get();
        if (existingJob != null) {
            // Update the properties of the existing job
            existingJob.setTitle(job.getTitle());
            existingJob.setDescription(job.getDescription());
            existingJob.setRequirements(job.getRequirements());
            existingJob.setLocation(job.getLocation());
            // Save the updated job
            return jobsRepository.save(existingJob);
        }
        return null;
    }
    public Map<String,String> deleteJob(Long id) {
        Map<String,String> response = new HashMap<>();
        try{

            jobsRepository.deleteById(id);
            response.put("message", "Job Deletion Success");

        }catch(Exception e){
            response.put("message", "Cant Delete Job");
        }
        return response;

    }
    public List<Jobs> getJobsByEmployer(Long employerId) {
        List<Jobs> jobsList=jobsRepository.findJobsByEmployerId(employerId);
        return jobsList;
    }
    public Map<String,String>  applyForJob(Long jobId, Long jobSeekerId) {
        Map<String,String> response = new HashMap<>();
        try{
            Jobs job=jobsRepository.findById(jobId).orElse(null);
            JobSeekers jobSeekers=jobSeekersRepository.findById(jobSeekerId).orElse(null);

            JobsApplied jobsApplied=new JobsApplied(jobSeekers,job);
            jobsAppliedRepository.save(jobsApplied);
            response.put("message", "Job Application Successfully");
        }catch(Exception e){
            response.put("message", "Job Application Failed");
        }
        return response;
    }

    public List<Jobs> getJobsAppliedByJobSeeker(Long jobSeekerId) {
        List<Jobs> jobsAppliedList=jobsRepository.findJobsByJobseekerId(jobSeekerId);
        return jobsAppliedList;
    }

    public List<JobSeekers> getApplicationsForJob(Long jobId) {
        List<JobSeekers> jobAppliedList=jobSeekersRepository.findJobseekersByJobId(jobId);
        return jobAppliedList;

    }
}
