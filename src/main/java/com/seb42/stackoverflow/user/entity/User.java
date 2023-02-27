package com.seb42.stackoverflow.user.entity;

//import com.seb42.stackoverflow.board.entity.Board;
import com.seb42.stackoverflow.board.entity.Board;
import com.seb42.stackoverflow.comment.entity.Comment;
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
@Table(name = "Users")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long userId;

    @Column(nullable = false, unique = true)
    private String email;

    @Column(nullable = false)
    private String password;

    @Column(nullable = false, unique = true)
    private String name;

    @ElementCollection(fetch = FetchType.EAGER)
    private List<String> roles = new ArrayList<>();

    @OneToMany(mappedBy = "user")
    private List<Board> boards = new ArrayList<>();

    @OneToMany(mappedBy = "user")
    private List<Comment> comments = new ArrayList<>();

    public void addBoard(Board board) {
        boards.add(board);
    }

    public void addComment(Comment comment) {
        comments.add(comment);
    }

    public enum MemberRole {
        ROLE_USER,
        ROLE_ADMIN
    }
}
