package com.seb42.stackoverflow.comment.repository;

import com.seb42.stackoverflow.comment.entity.Comment;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CommentRepository extends JpaRepository<Comment, Long> {
}
