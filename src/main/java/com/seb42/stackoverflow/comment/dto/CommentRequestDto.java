package com.seb42.stackoverflow.comment.dto;

import com.seb42.stackoverflow.comment.entity.Comment;
import com.seb42.stackoverflow.comment.entity.Posts;
import lombok.*;
import org.apache.catalina.User;

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
    //private User user; // member 객체로 수정필요
    private Posts posts;

    public Comment toEntity() {
        Comment comments = Comment.builder()
                .id(id)
                .comment(comment)
                .createdDate(createdDate)
                .modifiedDate(modifiedDate)
                //.user(user) member 객체로 수정필요
                .posts(posts)
                .build();

        return comments;
    }
}
