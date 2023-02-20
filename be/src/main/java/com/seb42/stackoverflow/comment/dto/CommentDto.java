package com.seb42.stackoverflow.comment.dto;

import com.seb42.stackoverflow.comment.entity.Comment;
import com.seb42.stackoverflow.comment.entity.Posts;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.apache.catalina.User;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

public class CommentDto {


    @Builder
    @Data
    @NoArgsConstructor
    @AllArgsConstructor
    public static class request {
        private Long id;
        private String comment;
        private String createdDate = LocalDateTime.now().format(DateTimeFormatter.ISO_DATE);
        private String modifiedDate = LocalDateTime.now().format(DateTimeFormatter.ISO_DATE);
        private User user;
        private Posts posts;

        public Comment toEntity() {
            Comment comments = Comment.builder()
                    .id(id)
                    .comment(comment)
                    .createdDate(createdDate)
                    .modifiedDate(modifiedDate)
                    .user(user)
                    .posts(posts)
                    .build();

            return comments;
        }
    }

}
