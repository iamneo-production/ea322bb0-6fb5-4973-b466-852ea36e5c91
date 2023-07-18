package com.example.springapp.controller;

import com.example.springapp.model.Employer;
import com.example.springapp.model.JobSeekers;
import com.example.springapp.service.JobSeekersService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/job-seekers")
@CrossOrigin("http://localhost:8081")
public class JobSeekersController {
    @Autowired
    JobSeekersService jobSeekersService;
    @GetMapping
    public ResponseEntity<List<JobSeekers>> getAllJobSeekers() {
        List<JobSeekers> jobSeekers= jobSeekersService.getAllJobSeekers();
        return ResponseEntity.ok(jobSeekers);
    }

    @PostMapping
    public ResponseEntity<JobSeekers> createJobSeeker(@RequestBody JobSeekers jobSeeker) {
        JobSeekers createJobSeeker= jobSeekersService.createJobSeeker(jobSeeker);
        return ResponseEntity.status(HttpStatus.CREATED).body(createJobSeeker);
    }

    @PutMapping
    public JobSeekers editJobSeeker(@RequestBody JobSeekers jobSeeker) {
        return jobSeekersService.editJobSeeker(jobSeeker);
    }

    @GetMapping(params = "id")
    public ResponseEntity<List<JobSeekers>> getJobSeekerById(@RequestParam("id") Long id) {
        try{
            List<JobSeekers> jobSeeker=jobSeekersService.getJobSeekerById(id);
            // if(jobSeeker.isEmpty()) return ResponseEntity.notFound().build();
            return ResponseEntity.ok(jobSeeker);
        } catch (Exception e){
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
//        JobSeekers jobSeeker= jobSeekersService.getJobSeekerById(id);
//        return ResponseEntity.ok(jobSeeker);
    }

    @DeleteMapping("/{id}")
    public void deleteJobSeeker(@PathVariable("id") Long id) {
        jobSeekersService.deleteJobSeeker(id);
    }
}
