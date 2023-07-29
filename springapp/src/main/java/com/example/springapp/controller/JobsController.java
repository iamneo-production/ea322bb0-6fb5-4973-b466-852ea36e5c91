package com.example.springapp.controller;

import com.example.springapp.model.*;
import com.example.springapp.repository.EmployersRepository;
import com.example.springapp.service.JobsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.ArrayList;
import java.util.Map;

@RestController
@RequestMapping("/jobs")
@CrossOrigin("https://8081-afeaabfaaefecdaaadaccdadddfabcfbf.project.examly.io")
public class JobsController {
    @Autowired
    private EmployersRepository employersRepository;
    @Autowired
    private JobsService jobsService;

    @Autowired
    public JobsController(EmployersRepository employersRepository ){
        this.employersRepository = employersRepository;
    }

    @PostMapping
    public ResponseEntity<Map<String,String>> createJob(@RequestBody Jobs job) {
        try{
            Map<String,String> response = jobsService.createJob(job);
            if((response.get("message")).equals("Job Post Failed")){
                return  ResponseEntity.status(HttpStatus.BAD_REQUEST).body(jobsService.createJob(job));
            }
            else{
                return  ResponseEntity.status(HttpStatus.CREATED).body(jobsService.createJob(job));
            }
        }catch(Exception e){
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    @GetMapping
    public ResponseEntity<List<Jobs>> getAllJobs() {
        return ResponseEntity.status(HttpStatus.OK).body(jobsService.getAllJobs());
    }

    @GetMapping(params = "id")
    public ResponseEntity<List<Jobs>> getJobById(@RequestParam("id") Long id) {
        try{
            List<Jobs> job=jobsService.getJobById(id);
            return ResponseEntity.ok(job);
        } catch (Exception e){
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    @PutMapping(params = "id")
    public Jobs editJob(@RequestParam("id") Long id,@RequestBody Jobs job) {
        return jobsService.editJob(id, job);
    }

    @DeleteMapping(params = "id")
    public ResponseEntity<Map<String,String>> deleteJob(@RequestParam("id") Long id) {
        return ResponseEntity.status(HttpStatus.OK).body(jobsService.deleteJob(id));
    }

    @GetMapping("/employer/{employerId}") // Get jobs posted by particular employer
    public List<Jobs> getJobsByEmployer(@PathVariable("employerId") Long employerId) {
        return jobsService.getJobsByEmployer(employerId);
    }

    @PostMapping("/apply") // Apply for a job (jobId and jobSeekerId as RequestParam)
    public ResponseEntity<Map<String,String>> applyForJob(@RequestParam("jobId") Long jobId, @RequestParam("jobSeekerId") Long jobSeekerId) {
        return ResponseEntity.status(HttpStatus.OK).body(jobsService.applyForJob(jobId, jobSeekerId));
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