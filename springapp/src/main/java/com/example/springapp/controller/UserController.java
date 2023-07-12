package com.example.springapp.controller;

import com.example.springapp.model.User;
import com.example.springapp.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/user")
@CrossOrigin("http://localhost:8081")
public class UserController {
    @Autowired
    UserService userService;
    @PostMapping(path="/register")
    public User addUser(@RequestBody User user) {
        return userService.addUser(user);
    }
    @GetMapping
    public List<User> getAllUser(){
        return userService.getUsers();
    }
    @PostMapping("/login")
    public boolean loginUser(@RequestBody User user) {
        return userService.authentication(user);
    }
}
