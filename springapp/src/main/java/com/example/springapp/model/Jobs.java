package com.example.springapp.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.fasterxml.jackson.annotation.JsonProperty;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
public class Jobs {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String title;
    private String description;
    private String requirements;
    private String location;

    @ManyToOne
    @JoinColumn(name = "employer_id")
    private Employer employer;

    @JsonIgnore
    @OneToMany(mappedBy = "jobs",cascade = CascadeType.ALL)
    private List<JobsApplied> jobsApplied;

    public Jobs() {
        // default constructor
    }

    public Jobs(Long id, String title, String description, String requirements, String location, Employer employer) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.requirements = requirements;
        this.location = location;
        this.employer = employer;
    }

    public Jobs(Long id, String title, String description, String requirements, String location, Employer employer, List<JobsApplied> jobsApplied) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.requirements = requirements;
        this.location = location;
        this.employer = employer;
        this.jobsApplied = jobsApplied;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getRequirements() {
        return requirements;
    }

    public void setRequirements(String requirements) {
        this.requirements = requirements;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public Employer getEmployer() {
        return employer;
    }

    public void setEmployer(Employer employer) {
        this.employer = employer;
    }

    @JsonIgnore
    public List<JobsApplied> getJobsApplied() {
        return jobsApplied;
    }

    public void setJobsApplied(List<JobsApplied> jobsApplied) {
        this.jobsApplied = jobsApplied;
    }

    @Override
    public String toString() {
        return "Jobs{" +
                "id=" + id +
                ", title='" + title + '\'' +
                ", description='" + description + '\'' +
                ", requirements='" + requirements + '\'' +
                ", location='" + location + '\'' +
                // ", employer=" + employer +
                ", jobsApplied=" + jobsApplied +
                '}';
    }
}
