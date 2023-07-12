package com.example.springapp.service;

import com.example.springapp.model.Employer;
import com.example.springapp.model.JobSeekers;
import com.example.springapp.repository.EmployersRepository;
import com.example.springapp.repository.JobSeekersRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class EmployerService {
    @Autowired
    private  EmployersRepository employersRepository;
    @Autowired
    private JobSeekersRepository jobSeekersRepository;
    public List<Employer> getAllEmployers() {
        return employersRepository.findAll();
    }
    public Employer getEmployerById(Long id) {
        return employersRepository.findById(id).orElse(null);
    }

    public Employer createEmployer(Employer employer) {
        return employersRepository.save(employer);
    }

    public Employer editEmployer(Employer employer) {
        Employer existingEmployer = employersRepository.findById(employer.getId()).orElse(null);
        if (existingEmployer != null) {
            // Update the properties of the existing employer
            existingEmployer.setName(employer.getName());
            existingEmployer.setDescription(employer.getDescription());
            existingEmployer.setLocation(employer.getLocation());
            existingEmployer.setUser(employer.getUser());
            // Save the updated employer
            return employersRepository.save(existingEmployer);
        }
        return null;
    }

    public void deleteEmployer(Long id) {
        employersRepository.deleteById(id);
    }

    public List<JobSeekers> getCandidatesByEmployer(Long employee_id) {
        // Logic to retrieve candidates by employer
        List<JobSeekers> jobsAppliedByEmployer=jobSeekersRepository.findJobseekersByEmployerId(employee_id);
        return jobsAppliedByEmployer;
    }
}
