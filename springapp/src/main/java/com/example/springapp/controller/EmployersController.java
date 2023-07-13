package com.example.springapp.controller;

import com.example.springapp.model.Employer;
import com.example.springapp.model.JobSeekers;
import com.example.springapp.service.EmployerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/employer")
@CrossOrigin("http://localhost:8081")
public class EmployersController {
    @Autowired
    EmployerService employerService;
    @GetMapping
    public ResponseEntity<List<Employer>> getAllEmployers() {
        List<Employer> employers= employerService.getAllEmployers();
        return ResponseEntity.status(HttpStatus.OK).body(employers);
    }

    @GetMapping(params = "id")
    public ResponseEntity<List<Employer>> getEmployerById(@RequestParam("id") Long id) {
        try{
            List<Employer> employer=employerService.getEmployerById(id);
            if(employer.isEmpty()) return ResponseEntity.notFound().build();
            return ResponseEntity.ok(employer);
        } catch (Exception e){
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
//        Employer employer= employerService.getEmployerById(id);
//        return ResponseEntity.ok(employer);
    }

    @PostMapping
    public ResponseEntity<Employer> createEmployer(@RequestBody Employer employer) {
        try{
            Employer createEmployer= employerService.createEmployer(employer);
            return  ResponseEntity.status(HttpStatus.CREATED).body(createEmployer);
        }catch(Exception e){
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }

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
