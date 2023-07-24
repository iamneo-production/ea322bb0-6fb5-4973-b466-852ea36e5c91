package com.example.springapp.service;

import com.example.springapp.model.User;
import com.example.springapp.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class AdminDataInitializer implements CommandLineRunner {
    @Autowired
    private UserRepository userRepository;
    @Override
    public void run(String... args) {
        // Check if the admin user already exists in the database
        if (!userRepository.existsByUsername("admin@gmail.com")) {
            // If not, create and store the admin user with provided credentials
            String adminUsername = "admin@gmail.com";
            String adminPassword = "Admin123@"; // You should hash this password in a real-world scenario
            String adminRole = "admin";

            User adminUser = new User();
            adminUser.setUsername(adminUsername);
            adminUser.setPassword(adminPassword);
            adminUser.setRole(adminRole);

            userRepository.save(adminUser);
        }
    }
}
