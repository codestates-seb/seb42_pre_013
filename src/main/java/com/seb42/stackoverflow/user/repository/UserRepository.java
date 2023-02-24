package com.seb42.stackoverflow.user.repository;

import com.seb42.stackoverflow.user.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findByEmail(String email);

    Optional<User> findById(long userId);

    User findByName(String name);

    Optional<User> findByEmailAndPassword(String email, String password);
}
