package com.example.springapp.service;

import com.example.springapp.model.Employer;
import com.example.springapp.model.JobSeekers;
import com.example.springapp.model.Jobs;
import com.example.springapp.model.JobsApplied;
import com.example.springapp.repository.EmployersRepository;
import com.example.springapp.repository.JobSeekersRepository;
import com.example.springapp.repository.JobsAppliedRepository;
import com.example.springapp.repository.JobsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

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
    public Jobs createJob(Jobs job) {
        return jobsRepository.save(job);
    }
    public List<Jobs> getJobById(Long id) {
        List<Jobs> job=new ArrayList<>();
        Jobs jb= jobsRepository.findById(id).orElse(null);
        if(jb!=null) job.add(jb);
        return job;
    }
    public Jobs editJob(Jobs job) {
        Jobs existingJob = jobsRepository.findById(job.getId()).orElse(null);
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
    public void deleteJob(Long id) {
        jobsRepository.deleteById(id);
    }
    public List<Jobs> getJobsByEmployer(Long employerId) {
        List<Jobs> jobsList=jobsRepository.findJobsByEmployerId(employerId);
        return jobsList;
    }
    public String applyForJob(Long jobId, Long jobSeekerId) {
        // Logic to apply for a job
        Jobs job=jobsRepository.findById(jobId).orElse(null);
        JobSeekers jobSeekers=jobSeekersRepository.findById(jobSeekerId).orElse(null);

        JobsApplied jobsApplied=new JobsApplied(jobSeekers,job);
        jobsAppliedRepository.save(jobsApplied);
        return "Job applied successfully";
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
