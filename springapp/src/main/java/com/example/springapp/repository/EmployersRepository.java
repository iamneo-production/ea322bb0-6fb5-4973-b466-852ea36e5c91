package com.example.springapp.repository;

import com.example.springapp.model.Employer;
import com.example.springapp.model.Jobs;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface EmployersRepository extends JpaRepository<Employer,Long> {

    @Query(value = "SELECT count(*) FROM employer ", nativeQuery = true)
    public int getNumberOfEmployer();

    @Query(value = "SELECT * from employer where user_id=?", nativeQuery = true)
    public Employer findEmployerByUserId(Long userId);

}
