package com.example.springapp.service;

import com.example.springapp.model.Employer;
import com.example.springapp.model.JobSeekers;
import com.example.springapp.model.Jobs;
import com.example.springapp.repository.EmployersRepository;
import com.example.springapp.repository.JobSeekersRepository;
import com.example.springapp.repository.JobsRepository;
import com.example.springapp.repository.UserRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class EmployerService {
    @Autowired
    private  EmployersRepository employersRepository;
    @Autowired
    private JobSeekersRepository jobSeekersRepository;
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private JobsRepository jobsRepository;
    public List<Map<String,String>> getAllEmployers() {
        List<Employer>  allEmployers = employersRepository.findAll();
        List<Map<String,String>> allEmployersList = new ArrayList<>();
        for(Employer e: allEmployers){
            Map<String,String> employerDetails = new HashMap<>();
            employerDetails.put("id", Long.toString(e.getId()));
            employerDetails.put("name", e.getName());
            employerDetails.put("description", e.getDescription());
            employerDetails.put("location", e.getLocation());
            employerDetails.put("userId", Long.toString(e.getId()));
            employerDetails.put("emailId", userRepository.getReferenceById(e.getUserId()).getUsername());
            allEmployersList.add(employerDetails);
        }
        return allEmployersList;
    }
     public List<Map<String,String>> getEmployerById(Long id) {
        List<Map<String,String>> employer = new ArrayList<>();
        Map<String,String> employerDetails = new HashMap<>();
        Employer emp=employersRepository.findById(id).orElse(null);
        if(emp!=null) {
            employerDetails.put("id", Long.toString(emp.getId()));
            employerDetails.put("name", emp.getName());
            employerDetails.put("description", emp.getDescription());
            employerDetails.put("location", emp.getLocation());
            employerDetails.put("userId", Long.toString(emp.getId()));
            employerDetails.put("emailId", userRepository.getReferenceById(emp.getUserId()).getUsername());
            employer.add(employerDetails);
        }
        return employer;
    }

    public Employer createEmployer(Employer employer) {
       return employersRepository.save(employer);
    }

    public Employer editEmployer(Long id, Employer employer) {
        Employer existingEmployer = employersRepository.findById(id).get();
        if (existingEmployer != null) {
            // Update the properties of the existing employer
            existingEmployer.setName(employer.getName());
            existingEmployer.setDescription(employer.getDescription());
            existingEmployer.setLocation(employer.getLocation());
            // Save the updated employer
            return employersRepository.save(existingEmployer);
        }
        return null;
    }

    public Map<String,String> deleteEmployer(Long id) {
        Map<String,String> response = new HashMap<>();
        try{
            employersRepository.deleteById(id);
            response.put("message", "Employer Deletion Success");
        }
        catch(Exception e){
            response.put("message", "Employer Deletion Failed");
        }
        return response;
    }

    public List<Map<String,String>> getCandidatesByEmployer(Long employerId) {
        // Logic to retrieve candidates by employer
        List<Map<String,String>> list=new ArrayList<>();
        List<Jobs> jobs=jobsRepository.findJobsByEmployerId(employerId);
        for(Jobs j:jobs){
            List<JobSeekers> jobAppliedList=jobSeekersRepository.findJobseekersByJobId(j.getId());
            for(JobSeekers js:jobAppliedList){
                Map<String,String> mp=new HashMap<>();
                mp.put("job-Id",Long.toString(j.getId()));
                mp.put("job-title",j.getTitle());
                mp.put("job-description",j.getDescription());
                mp.put("job-requirements",j.getRequirements());
                mp.put("job-location",j.getLocation());
                mp.put("jobSeeker-Id",Long.toString(js.getId()));
                mp.put("jobSeeker-name",js.getName());
                mp.put("jobSeeker-skills",js.getSkills());
                mp.put("jobSeeker-experience",js.getExperience());
                mp.put("jobSeeker-location",js.getLocation());
                mp.put("jobSeeker-mailId",userRepository.getReferenceById(js.getUserId()).getUsername());
                list.add(mp);
            }
        }
        return list;
    }
}
