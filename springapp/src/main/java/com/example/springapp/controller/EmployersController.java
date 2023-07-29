package com.example.springapp.controller;

import com.example.springapp.model.Employer;
import com.example.springapp.model.JobSeekers;
import com.example.springapp.model.User;
import com.example.springapp.repository.JobSeekersRepository;
import com.example.springapp.repository.JobsRepository;
import com.example.springapp.service.EmployerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/employer")
@CrossOrigin("https://8081-fadbdbfecafeceefecdaaadaccdadddfabcfbf.project.examly.io")
public class EmployersController {
    @Autowired
    EmployerService employerService;
    @Autowired
    JobsRepository jobsRepository;
    @Autowired
    JobSeekersRepository jobSeekersRepository;
    @GetMapping
    public ResponseEntity<List<Map<String,String>>> getAllEmployers() {
        List<Map<String,String>> employers= employerService.getAllEmployers();
        return ResponseEntity.status(HttpStatus.OK).body(employers);
    }

    @GetMapping(params = "id")
    public ResponseEntity<List<Map<String,String>>> getEmployerById(@RequestParam("id") Long id) {
        try{
            return ResponseEntity.status(HttpStatus.OK).body(employerService.getEmployerById(id));
        } catch (Exception e){
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    @PostMapping
    public ResponseEntity<Map<String,String>> createEmployer(@RequestBody Employer employer) {

            Employer employerResponseObject = new Employer();
            employerResponseObject = employerService.createEmployer(employer);
            Map<String,String> employeeResponse=new LinkedHashMap<>();
            employeeResponse.put("employerId",Long.toString(employerResponseObject.getId()));
            employeeResponse.put("employerName",employerResponseObject.getName());

            return ResponseEntity.status(HttpStatus.CREATED).body(employeeResponse);
    }

    @PutMapping(params = "id")
    public ResponseEntity<Employer> editEmployer(@RequestParam("id") Long id, @RequestBody Employer employer) {
        return ResponseEntity.status(HttpStatus.CREATED).body(employerService.editEmployer(id, employer));
    }

    @DeleteMapping(params = "id")
    public ResponseEntity<Map<String,String>>  deleteEmployer(@RequestParam("id") Long id) {
       return ResponseEntity.status(HttpStatus.OK).body(employerService.deleteEmployer(id));
    }

    @GetMapping("/{id}/candidates") // get all candidates that applied to their jobs
    public List<Map<String,String>> getCandidatesByEmployer(@PathVariable("id") Long id) {
        return employerService.getCandidatesByEmployer(id);
    }
    @GetMapping(path = "/statistics/{id}")
    public ResponseEntity<Map<String,Integer>> getEmployerData(@PathVariable("id")Long id){
        HashMap<String, Integer> map = new HashMap<>();
        int numberOfJobsPosted=jobsRepository.getNumberOfJobsByEmployerId(id);
        int numberOfApplicants=jobSeekersRepository.getNumberOfJobseekersByEmployerId(id);
        map.put("jobsPosted", numberOfJobsPosted);
        map.put("applicants", numberOfApplicants);
        return ResponseEntity.status(HttpStatus.OK).body(map);
    }
}
