package com.example.springapp.controller;

import com.example.springapp.model.Employer;
import com.example.springapp.model.JobSeekers;
import com.example.springapp.repository.JobsRepository;
import com.example.springapp.service.JobSeekersService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/job-seekers")
@CrossOrigin("https://8081-bfabbcefecdaaadaccdadddfabcfbf.project.examly.io")
public class JobSeekersController {
    @Autowired
    JobSeekersService jobSeekersService;
    @Autowired
    JobsRepository jobsRepository;
    @GetMapping
    public ResponseEntity<List<Map<String,String>>> getAllJobSeekers() {
        return  ResponseEntity.status(HttpStatus.OK).body(jobSeekersService.getAllJobSeekers());
    }

    @PostMapping
    public ResponseEntity<Map<String,String>> createJobSeeker(@RequestBody JobSeekers jobSeeker) {
        JobSeekers jobSeekerResponseObject = jobSeekersService.createJobSeeker(jobSeeker);
        Map<String,String> jobSeekerResponse=new LinkedHashMap<>();
        jobSeekerResponse.put("jobSeekerId",Long.toString(jobSeekerResponseObject.getId()));
        jobSeekerResponse.put("jobSeekerName",jobSeekerResponseObject.getName());
        return ResponseEntity.status(HttpStatus.OK).body(jobSeekerResponse);

    }

    @PutMapping(params = "id")
    public ResponseEntity<JobSeekers> editJobSeeker(@RequestParam("id") Long id, @RequestBody JobSeekers jobSeeker) {
        return ResponseEntity.status(HttpStatus.CREATED).body(jobSeekersService.editJobSeeker(id,jobSeeker));
    }

    @GetMapping(params = "id")
    public ResponseEntity<List<Map<String,String>>> getJobSeekerById(@RequestParam("id") Long id) {
        try{
             return ResponseEntity.status(HttpStatus.OK).body(jobSeekersService.getJobSeekerById(id));
        } catch (Exception e){
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    @DeleteMapping(params = "id")
    public ResponseEntity<Map<String,String>> deleteJobSeeker(@RequestParam("id") Long id) {
        return ResponseEntity.status(HttpStatus.OK).body(jobSeekersService.deleteJobSeeker(id));
    }

    @GetMapping(path = "/statistics/{id}")
    public ResponseEntity<Map<String,Integer>> getEmployerData(@PathVariable("id")Long id){
        HashMap<String, Integer> map = new HashMap<>();
        int numberOfJobsApplied=jobsRepository.getNumberOfJobsByJobseekerId(id);
        int totalNumberOfJobs = jobsRepository.getNumberOfJobs();
        map.put("jobsApplied", numberOfJobsApplied);
                map.put("totalJobs", totalNumberOfJobs);

        return ResponseEntity.status(HttpStatus.OK).body(map);
    }
}
