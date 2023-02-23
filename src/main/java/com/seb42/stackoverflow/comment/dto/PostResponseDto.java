package com.seb42.stackoverflow.comment.dto;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;
import java.util.List;

public class PostResponseDto {

    private Long id;
    private String title;
    private String writer;
    private String content;
    private String createdDate, modifiedDate;
    private Long userId;
    private List<CommentResponseDto> comments;


}
