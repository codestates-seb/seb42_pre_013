package com.seb42.stackoverflow.comment.repository;

import com.seb42.stackoverflow.comment.entity.Posts;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PostsRepository extends JpaRepository<Posts, Long> {
}