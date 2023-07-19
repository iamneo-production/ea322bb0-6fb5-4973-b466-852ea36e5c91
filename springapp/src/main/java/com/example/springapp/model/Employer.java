package com.example.springapp.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonManagedReference;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
public class Employer {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String description;
    private String location;

    private long userId;
    @OneToMany(mappedBy = "employer",cascade = CascadeType.ALL)
    private List<Jobs> jobs;

    public Employer() {
        // default constructor
    }

    public Employer(Long id, String name, String description, String location, long userId, List<Jobs> jobs) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.location = location;
        this.userId = userId;
        this.jobs = jobs;
    }

    public Employer(Long id, String name, String description, String location, long userId) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.location = location;
        this.userId = userId;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public long getUserId() {
        return userId;
    }

    public void setUserId(long userId) {
        this.userId = userId;
    }

    public List<Jobs> getJobs() {
        return jobs;
    }

    public void setJobs(List<Jobs> jobs) {
        this.jobs = jobs;
    }

    @Override
    public String toString() {
        return "Employer{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", description='" + description + '\'' +
                ", location='" + location + '\'' +
                ", userId=" + userId +
                ", jobs=" + jobs +
                '}';
    }
}
