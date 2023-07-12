package com.example.springapp.controller;

import com.example.springapp.model.JobSeekers;
import com.example.springapp.service.JobSeekersService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/job-seekers")
@CrossOrigin("http://localhost:8081")
public class JobSeekersController {
    @Autowired
    JobSeekersService jobSeekersService;
    @GetMapping
    public List<JobSeekers> getAllJobSeekers() {
        return jobSeekersService.getAllJobSeekers();
    }

    @PostMapping
    public JobSeekers createJobSeeker(@RequestBody JobSeekers jobSeeker) {
        return jobSeekersService.createJobSeeker(jobSeeker);
    }

    @PutMapping
    public JobSeekers editJobSeeker(@RequestBody JobSeekers jobSeeker) {
        return jobSeekersService.editJobSeeker(jobSeeker);
    }

    @GetMapping("/{id}")
    public JobSeekers getJobSeekerById(@PathVariable("id") Long id) {
        return jobSeekersService.getJobSeekerById(id);
    }

    @DeleteMapping("/{id}")
    public void deleteJobSeeker(@PathVariable("id") Long id) {
        jobSeekersService.deleteJobSeeker(id);
    }
}
