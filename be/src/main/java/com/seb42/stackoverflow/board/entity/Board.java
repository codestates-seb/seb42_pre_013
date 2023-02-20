package com.seb42.stackoverflow.board.entity;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalDateTime;

@Getter
@Setter
@NoArgsConstructor
@Entity
@Table
public class Board {
    @Id
    @GeneratedValue
    private Long boardId;

    @Column(nullable = false)
    private Long userId;

    @Column(nullable = false)
    private String title;

    @Column(nullable = false)
    private String content;

    @Column(nullable = false)
    private LocalDateTime regdate = LocalDateTime.now();

    public enum BoardStatus{
        BOARD_NOT_FOUND("존재하지 않는 게시글"),
        BOARD_EXIST("존재하는 게시글");

        @Getter
        private String status;

        BoardStatus(String status){
            this.status = status;
        }
    }
}
