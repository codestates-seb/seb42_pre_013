package com.seb42.stackoverflow.comment.dto;

import com.seb42.stackoverflow.comment.entity.Comment;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

public class CommentResponseDto {

    private Long id;
    private String comment;
    private String createdDate = LocalDateTime.now().format(DateTimeFormatter.ISO_DATE);
    private String modifiedDate = LocalDateTime.now().format(DateTimeFormatter.ISO_DATE);
    private String nickname;
    private Long postsId;

    public CommentResponseDto(Comment comment) {
        this.id = comment.getId();
        this.comment = comment.getComment();
        this.createdDate = comment.getCreatedDate();
        this.modifiedDate = comment.getModifiedDate();
        //this.nickname = comment.getUser.getNickname();
        this.postsId = comment.getPosts().getId();
    }
}
