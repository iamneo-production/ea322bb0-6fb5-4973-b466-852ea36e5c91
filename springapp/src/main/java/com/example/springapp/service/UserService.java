package com.example.springapp.service;

import com.example.springapp.model.Employer;
import com.example.springapp.model.JobSeekers;
import com.example.springapp.model.User;
import com.example.springapp.repository.UserRepository;
import com.example.springapp.repository.EmployersRepository;
import com.example.springapp.repository.JobSeekersRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class UserService {
    @Autowired
    private  EmployersRepository employersRepository;
    @Autowired
    private  JobSeekersRepository jobSeekersRepository;
    @Autowired
    UserRepository userRepository;
    public User addUser(User user){
        return userRepository.save(user);
    }
    public List<User> getUsers(){
        return userRepository.findAll();
    }
    public Map<String,String> authentication(User user){
        User u=userRepository.findByUsername(user.getUsername());
        Map<String,String> message = new HashMap<>();
        if(u==null) {
            message.put("message","Invalid Credentials");
            return message;
        }
        else if(u.getPassword().equals(user.getPassword())){
            if(u.getRole().equals(user.getRole())){
                message.put("username",u.getUsername());
                message.put("userId",Long.toString(u.getId()));
                message.put("role",u.getRole());
                if(u.getRole().equals("jobseeker")){
                    try{
                    JobSeekers jobSeeker = jobSeekersRepository.findJobSeekerByUserId(u.getId());
                    message.put("jobSeekerName", jobSeeker.getName());
                    message.put("jobSeekerId", Long.toString(jobSeeker.getId()));
                    }
                    catch(Exception e){

                    }
                }else if(u.getRole().equals("employer")){
                    try{
                        Employer employer = employersRepository.findEmployerByUserId(u.getId());
                        message.put("employerName", employer.getName());
                        message.put("employerId", Long.toString(employer.getId()));
                    }catch(Exception e){

                    }
                }
                return message;
            }
        }
        message.put("message","Invalid Credentials");
        return message;
    }
}
