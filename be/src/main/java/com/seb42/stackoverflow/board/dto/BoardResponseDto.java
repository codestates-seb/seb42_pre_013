package com.seb42.stackoverflow.board.dto;

import com.seb42.stackoverflow.board.entity.Board;

import java.time.LocalDateTime;

public class BoardResponseDto {
    private long boardId;
    private String title;
    private String content;
    private Board.BoardStatus boardStatus;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
}
