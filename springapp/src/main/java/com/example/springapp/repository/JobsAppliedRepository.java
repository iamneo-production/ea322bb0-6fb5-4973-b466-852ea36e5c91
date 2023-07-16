package com.example.springapp.repository;

import com.example.springapp.model.Jobs;
import com.example.springapp.model.JobsApplied;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface JobsAppliedRepository extends JpaRepository<JobsApplied,Long> {
//    @Query(value="select jobs_id from JobsApplied where jobseekers_id=?",nativeQuery = true)
//    public List<Long> selectJobIdsByJobSeekerId(Long jobseekers_id);
//
//    @Query(value="select jobseekers_id from JobsApplied where jobs_id=?",nativeQuery = true)
//    public List<Long> selectJobApplicantsByJobId(Long jobs_id);

    @Query(value = "SELECT COUNT(*) FROM jobs_applied", nativeQuery = true)
    public int getNumberOfJobApplication();
}
