package com.seb42.stackoverflow.member.entity;

//import com.seb42.stackoverflow.board.entity.Board;
import com.seb42.stackoverflow.comment.entity.Comment;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Getter
@Setter
@NoArgsConstructor
@Entity
public class Member {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long memberId;

    @Column(nullable = false, unique = true)
    private String email;

    @Column(nullable = false)
    private String password;

    @Column(nullable = false, unique = true)
    private String name;

//    @OneToMany(mappedBy = "member")
//    private List<Board> boards = new ArrayList<>();

//    @OneToMany(mappedBy = "member")
//    private List<Comment> comments = new ArrayList<>();

//    public void addBoard(Board board) {
//        boards.add(board);
//    }
//
//    public void addComment(Comment comment) {
//        comment.add(comment);
//    }

    public boolean checkPassword(String password){
        return this.password.equals(password);
    }
}
