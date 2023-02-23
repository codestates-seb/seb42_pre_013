package com.seb42.stackoverflow.board.dto;

import com.seb42.stackoverflow.board.entity.Board;
import lombok.Getter;

import java.time.LocalDateTime;

@Getter
public class BoardResponseDto {
    private long boardId;
    private String title;
    private String content;
    private Board.BoardStatus boardStatus;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
}
