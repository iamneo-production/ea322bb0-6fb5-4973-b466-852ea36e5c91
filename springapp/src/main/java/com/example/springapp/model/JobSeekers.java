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
    @JsonIgnore
    @OneToOne
    @JoinColumn(name = "user_id")
    private User user;

    @OneToMany(mappedBy = "jobSeekers",cascade = CascadeType.ALL)
    private List<JobsApplied> jobsApplied=new ArrayList<>();

    public JobSeekers() {
        // default constructor
    }

    public JobSeekers(String name, String skills, String experience, String location, User user, List<JobsApplied> jobsApplied) {
        this.name = name;
        this.skills = skills;
        this.experience = experience;
        this.location = location;
        this.user = user;
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

    @JsonBackReference
//    @JsonManagedReference
    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    //    @JsonManagedReference
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
                ", userId=" + user +
                ", jobsApplied=" + jobsApplied +
                '}';
    }
}
