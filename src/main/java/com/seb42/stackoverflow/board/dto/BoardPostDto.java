package com.seb42.stackoverflow.board.dto;

import javax.validation.constraints.NotBlank;
import lombok.Getter;

@Getter
public class BoardPostDto {
    private long boardId;
    @NotBlank
    private String title;
    @NotBlank
    private String content;
}
