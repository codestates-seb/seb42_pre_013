package com.seb42.stackoverflow.board.entity;

import com.seb42.stackoverflow.comment.entity.Comment;
import com.seb42.stackoverflow.user.entity.User;
import lombok.*;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Entity
public class Board {
    @Id
    @GeneratedValue
    private long boardId;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    @OneToMany
    @JoinColumn(name = "comment")
    private List<Comment> comments = new ArrayList<>();

    @Column(nullable = false)
    private String title;

    @Column(nullable = false)
    private String content;

    @Builder.Default
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
