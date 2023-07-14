package com.example.springapp.controller;

import com.example.springapp.model.Employer;
import com.example.springapp.model.JobSeekers;
import com.example.springapp.model.Jobs;
import com.example.springapp.model.JobsApplied;
import com.example.springapp.repository.EmployersRepository;
import com.example.springapp.service.JobsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/jobs")
@CrossOrigin("http://localhost:8081")
public class JobsController {
    @Autowired
    private EmployersRepository employersRepository;
    @Autowired
    private JobsService jobsService;

    @PostMapping
    public ResponseEntity<Jobs> createJob(@RequestBody Jobs job) {
//        System.out.println(job.toString());
        try{
            Jobs createJob= jobsService.createJob(job);
            return  ResponseEntity.status(HttpStatus.CREATED).body(createJob);
        }catch(Exception e){
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
//        Jobs createJob= jobsService.createJob(job);
//        return  ResponseEntity.status(HttpStatus.CREATED).body(createJob);
    }

    @GetMapping
    public ResponseEntity<List<Jobs>> getAllJobs() {
        List<Jobs> jobs= jobsService.getAllJobs();
        return ResponseEntity.ok(jobs);
    }

    @GetMapping(params = "id")
    public ResponseEntity<List<Jobs>> getJobById(@RequestParam("id") Long id) {
        try{
            List<Jobs> job=jobsService.getJobById(id);
            // if(job.isEmpty()) return ResponseEntity.notFound().build();
            return ResponseEntity.ok(job);
        } catch (Exception e){
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
//        Jobs job= jobsService.getJobById(id);
//        return ResponseEntity.ok(job);
    }

    @PutMapping
    public Jobs editJob(@RequestBody Jobs job) {
        return jobsService.editJob(job);
    }

    @DeleteMapping("/{id}")
    public void deleteJob(@PathVariable("id") Long id) {
        jobsService.deleteJob(id);
    }

    @GetMapping("/employer/{employerId}") // Get jobs posted by particular employer
    public List<Jobs> getJobsByEmployer(@PathVariable("employerId") Long employerId) {
        return jobsService.getJobsByEmployer(employerId);
    }

    @PostMapping("/apply") // Apply for a job (jobId and jobSeekerId as RequestParam)
    public String applyForJob(@RequestParam("jobId") Long jobId, @RequestParam("jobSeekerId") Long jobSeekerId) {
        return jobsService.applyForJob(jobId, jobSeekerId);
    }

    @GetMapping("/jobs-applied/{jobSeekerId}") // Get all jobs a job-seeker applied to
    public List<Jobs> getJobsAppliedByJobSeeker(@PathVariable("jobSeekerId") Long jobSeekerId) {
        return jobsService.getJobsAppliedByJobSeeker(jobSeekerId);
    }

    @GetMapping("/applications/{jobId}") // Get list of applications for jobId
    public List<JobSeekers> getApplicationsForJob(@PathVariable("jobId") Long jobId) {
        return jobsService.getApplicationsForJob(jobId);
    }
}
