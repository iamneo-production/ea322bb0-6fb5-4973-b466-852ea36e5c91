package com.example.springapp.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
public class JobSeekers {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String skills;
    private String experience;
    private String location;
    private long userId;

    @JsonIgnore
    @OneToMany(mappedBy = "jobSeekers",cascade = CascadeType.ALL)
    private List<JobsApplied> jobsApplied=new ArrayList<>();

    public JobSeekers() {
        // default constructor
    }

    public JobSeekers(Long id, String name, String skills, String experience, String location, long userId) {
        this.id = id;
        this.name = name;
        this.skills = skills;
        this.experience = experience;
        this.location = location;
        this.userId = userId;
    }

    public JobSeekers(Long id, String name, String skills, String experience, String location, long userId, List<JobsApplied> jobsApplied) {
        this.id = id;
        this.name = name;
        this.skills = skills;
        this.experience = experience;
        this.location = location;
        this.userId = userId;
        this.jobsApplied = jobsApplied;
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

    public String getSkills() {
        return skills;
    }

    public void setSkills(String skills) {
        this.skills = skills;
    }

    public String getExperience() {
        return experience;
    }

    public void setExperience(String experience) {
        this.experience = experience;
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

    @JsonBackReference
    public List<JobsApplied> getJobsApplied() {
        return jobsApplied;
    }

    public void setJobsApplied(List<JobsApplied> jobsApplied) {
        this.jobsApplied = jobsApplied;
    }

    @Override
    public String toString() {
        return "JobSeekers{" +
                "id=" + id +
                ", name='" + name + '\'' +
                ", skills='" + skills + '\'' +
                ", experience='" + experience + '\'' +
                ", location='" + location + '\'' +
                ", userId=" + userId +
                ", jobsApplied=" + jobsApplied +
                '}';
    }
}
