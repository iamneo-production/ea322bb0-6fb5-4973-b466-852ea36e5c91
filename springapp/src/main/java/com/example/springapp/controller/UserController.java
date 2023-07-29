package com.example.springapp.controller;

import com.example.springapp.model.User;
import com.example.springapp.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/user")
@CrossOrigin("https://8081-afeaabfaaefecdaaadaccdadddfabcfbf.project.examly.io")
public class UserController {
    @Autowired
    UserService userService;
    @PostMapping(path="/register")
      public ResponseEntity<Map<String,String>> addUser(@RequestBody User user) {
         try{
             User userResponseObject = new User();
             userResponseObject =userService.addUser(user);
             Map<String,String> userResponse=new LinkedHashMap<>();
             userResponse.put("id",Long.toString(userResponseObject.getId()));
             userResponse.put("username",userResponseObject.getUsername());
             userResponse.put("role",userResponseObject.getRole());
             return ResponseEntity.status(HttpStatus.OK).body(userResponse);
         }
         catch(Exception e){
            Map<String,String> errorMessage=new LinkedHashMap<>();
            errorMessage.put("message","User Already Exists");
             return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(errorMessage);
         }
     }
    @GetMapping
    public ResponseEntity<List<User>> getAllUser(){
        return ResponseEntity.status(HttpStatus.OK).body(userService.getUsers());
    }
    @PostMapping("/login")
    public ResponseEntity<Map<String,String>> loginUser(@RequestBody User user) {
        return ResponseEntity.status(HttpStatus.OK).body(userService.authentication(user));
    }
}
