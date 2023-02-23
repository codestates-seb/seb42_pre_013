package com.seb42.stackoverflow.member.repository;

import com.seb42.stackoverflow.member.entity.Member;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface MemberRepository extends JpaRepository<Member, Long> {
    Optional<Member> findByEmail(String email);

    Optional<Member> findById(long memberId);

    Optional<Member> findByEmailAndPassword(String email, String password);
}
