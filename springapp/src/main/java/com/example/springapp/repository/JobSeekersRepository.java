package com.example.springapp.repository;

import com.example.springapp.model.JobSeekers;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface JobSeekersRepository extends JpaRepository<JobSeekers,Long> {
    @Query(value = "SELECT js.* FROM job_seekers js JOIN jobs_applied ja ON js.id = ja.jobseekers_id JOIN jobs j ON ja.jobs_id = j.id JOIN employer e ON j.employer_id = e.id WHERE e.id =?",nativeQuery = true)
    List<JobSeekers> findJobseekersByEmployerId(Long empId);

    @Query(value = "SELECT js.* FROM job_seekers js JOIN jobs_Applied ja ON js.id = ja.jobseekers_id WHERE ja.jobs_id = ? ",nativeQuery = true)
    List<JobSeekers> findJobseekersByJobId(Long jobs_id);

    @Query(value = "SELECT COUNT(*) FROM job_seekers", nativeQuery = true)
    public int getNumberOfJobSeeker();

    @Query(value = "SELECT * from job_seekers where user_id=?", nativeQuery = true)
    public JobSeekers findJobSeekerByUserId(Long userId);

    @Query(value = "SELECT COUNT(*) FROM job_seekers js JOIN jobs_applied ja ON js.id = ja.jobseekers_id JOIN jobs j ON ja.jobs_id = j.id JOIN employer e ON j.employer_id = e.id WHERE e.id =?",nativeQuery = true)
    public int getNumberOfJobseekersByEmployerId(Long empId);

}
