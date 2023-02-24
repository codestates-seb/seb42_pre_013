package com.seb42.stackoverflow.board.dto;

import com.seb42.stackoverflow.board.entity.Board;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class BoardPatchDto {
    private long boardId;
    private String title;
    private String content;
    //private Board.BoardStatus boardStatus;
}
