package com.example.springapp.repository;

import com.example.springapp.model.Jobs;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface JobsRepository extends JpaRepository<Jobs,Long> {
//    @Query(value="select job_id from Jobs where employer_id=?",nativeQuery = true)
//    public List<Long> findJobIdsByEmployerId(Long employee_id);

    @Query(value = "select * from Jobs", nativeQuery = true)
    public List<Jobs> findAllJobs();
    @Query(value="select * from Jobs where employer_id=?",nativeQuery = true)
    public List<Jobs> findJobsByEmployerId(Long employee_id);

    @Query(value="SELECT j.* FROM jobs j JOIN jobs_applied ja ON j.id = ja.jobs_id WHERE ja.jobseekers_id = ?",nativeQuery = true)
    public List<Jobs> findJobsByJobseekerId(Long jobseeker_id);

    @Query(value = "SELECT COUNT(*) FROM jobs", nativeQuery = true)
    public int getNumberOfJobs();
}
