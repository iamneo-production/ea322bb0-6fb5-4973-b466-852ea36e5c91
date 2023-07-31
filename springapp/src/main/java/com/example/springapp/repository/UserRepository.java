package com.example.springapp.repository;

import com.example.springapp.model.Jobs;
import com.example.springapp.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserRepository extends JpaRepository<User,Long> {

    public User findByUsername(String username);

    boolean existsByUsername(String username);
}
