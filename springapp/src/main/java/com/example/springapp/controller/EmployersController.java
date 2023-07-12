package com.example.springapp.controller;

import com.example.springapp.model.Employer;
import com.example.springapp.model.JobSeekers;
import com.example.springapp.service.EmployerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/employer")
@CrossOrigin("http://localhost:8081")
public class EmployersController {
    @Autowired
    EmployerService employerService;
    @GetMapping
    public List<Employer> getAllEmployers() {
        return employerService.getAllEmployers();
    }

    @GetMapping("/{id}")
    public Employer getEmployerById(@PathVariable("id") Long id) {
        return employerService.getEmployerById(id);
    }

    @PostMapping
    public Employer createEmployer(@RequestBody Employer employer) {
        return employerService.createEmployer(employer);
    }

    @PutMapping
    public Employer editEmployer(@RequestBody Employer employer) {
        return employerService.editEmployer(employer);
    }

    @DeleteMapping("/{id}")
    public void deleteEmployer(@PathVariable("id") Long id) {
        employerService.deleteEmployer(id);
    }

    @GetMapping("/{id}/candidates") // get all candidates that applied to their jobs
    public List<JobSeekers> getCandidatesByEmployer(@PathVariable("id") Long id) {
        return employerService.getCandidatesByEmployer(id);
    }
}
