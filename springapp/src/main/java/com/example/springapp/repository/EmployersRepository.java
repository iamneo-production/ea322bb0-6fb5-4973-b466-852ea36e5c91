package com.example.springapp.repository;

import com.example.springapp.model.Employer;
import com.example.springapp.model.Jobs;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface EmployersRepository extends JpaRepository<Employer,Long> {
//    @Query(value="select job_id from Employer where employer_id=?",nativeQuery = true)
//    public List<Long> selectJobIdsByemplyerId(Long employeeId);

    @Query(value = "SELECT COUNT(*) FROM employer", nativeQuery = true)
    public int getNumberOfEmployer();
}
