package com.example.springapp.controller;

import com.example.springapp.repository.EmployersRepository;
import com.example.springapp.repository.JobSeekersRepository;
import com.example.springapp.repository.JobsAppliedRepository;
import com.example.springapp.repository.JobsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/admin")
@CrossOrigin("https://8081-fdaffbeddcdfefecdaaadaccdadddfabcfbf.project.examly.io")
public class DashboardController {
    @Autowired
    JobsRepository jobsRepository;
    @Autowired
    JobSeekersRepository jobSeekersRepository;
    @Autowired
    EmployersRepository employersRepository;
    @Autowired
    JobsAppliedRepository jobsAppliedRepository;
    @GetMapping(path = "/statistics")
    public ResponseEntity<Map<String,Integer>> getAdminData(){
        HashMap<String, Integer> map = new HashMap<>();
        int numberOfJobs=jobsRepository.getNumberOfJobs();
        int numberOfJobSeeker=jobSeekersRepository.getNumberOfJobSeeker();
        int numberOfEmployers=employersRepository.getNumberOfEmployer();
        int numberOfJobApplication=jobsAppliedRepository.getNumberOfJobApplication();
        map.put("job-posted", numberOfJobs);
        map.put("job-application", numberOfJobApplication);
        map.put("job-seeker", numberOfJobSeeker);
        map.put("employer", numberOfEmployers);
        return ResponseEntity.status(HttpStatus.OK).body(map);
    }

}