package com.seb42.stackoverflow.comment.dto;

import com.seb42.stackoverflow.comment.entity.Comment;
import lombok.Getter;
import lombok.RequiredArgsConstructor;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

@Getter
@RequiredArgsConstructor
public class CommentResponseDto {

    private Long id;
    private String comment;
    private String createdDate = LocalDateTime.now().format(DateTimeFormatter.ISO_DATE);
    private String modifiedDate = LocalDateTime.now().format(DateTimeFormatter.ISO_DATE);
    private String name;
    private Long boardId;

    public CommentResponseDto(Comment comment) {
        this.id = comment.getId();
        this.comment = comment.getComment();
        this.createdDate = comment.getCreatedDate();
        this.modifiedDate = comment.getModifiedDate();
        this.name = comment.getUser().getName();
        this.boardId = comment.getBoard().getBoardId();
    }
}
