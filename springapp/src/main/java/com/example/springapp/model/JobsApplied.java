package com.example.springapp.model;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;

@Entity
public class JobsApplied {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @JsonIgnore
    @ManyToOne
    @JoinColumn(name = "jobseekers_id")
    private JobSeekers jobSeekers;

    @JsonIgnore
    @ManyToOne
    @JoinColumn(name = "jobs_id")
    private Jobs jobs;

    public JobsApplied(JobSeekers jobSeekers, Jobs jobs) {
        this.jobSeekers = jobSeekers;
        this.jobs = jobs;
    }

    public JobsApplied() {
        // default constructor
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

//    @JsonBackReference
    public JobSeekers getJobSeekers() {
        return jobSeekers;
    }

    public void setJobSeekers(JobSeekers jobSeekers) {
        this.jobSeekers = jobSeekers;
    }

//    @JsonBackReference
    public Jobs getJobs() {
        return jobs;
    }

    public void setJobs(Jobs jobs) {
        this.jobs = jobs;
    }

    @Override
    public String toString() {
        return "JobsApplied{" +
                "id=" + id +
                ", jobSeekers=" + jobSeekers +
                ", jobs=" + jobs +
                '}';
    }
}
