package com.example.springapp.service;

import com.example.springapp.model.User;
import com.example.springapp.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {
    @Autowired
    UserRepository userRepository;
    public User addUser(User user){
        return userRepository.save(user);
    }
    public List<User> getUsers(){
        return userRepository.findAll();
    }
    public boolean authentication(User user){
        User u=userRepository.findByEmail(user.getUsername());
        if(u==null) return false;
        else if(u.getPassword().equals(user.getPassword())) return true;
        return false;
    }
}
