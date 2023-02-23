package com.seb42.stackoverflow.comment.dto;

import com.seb42.stackoverflow.comment.entity.Comment;
import com.seb42.stackoverflow.comment.entity.Posts;
import com.seb42.stackoverflow.user.entity.User;
import lombok.*;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

@Builder
@Data
@NoArgsConstructor
@AllArgsConstructor
public class CommentRequestDto {
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
