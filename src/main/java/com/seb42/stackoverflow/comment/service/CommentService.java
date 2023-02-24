package com.seb42.stackoverflow.comment.service;

import com.seb42.stackoverflow.board.entity.Board;
import com.seb42.stackoverflow.board.repository.BoardRepository;
import com.seb42.stackoverflow.comment.dto.CommentRequestDto;
import com.seb42.stackoverflow.comment.dto.CommentResponseDto;
import com.seb42.stackoverflow.comment.entity.Comment;
import com.seb42.stackoverflow.comment.repository.CommentRepository;
import com.seb42.stackoverflow.user.entity.User;
import com.seb42.stackoverflow.user.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class CommentService {

    private final CommentRepository commentRepository;
    private final UserRepository userRepository;
    private final BoardRepository boardRepository;
    @Transactional
    public Long commentSave(String name, Long id, CommentRequestDto dto) {
        User user = userRepository.findByName(name);
        Board board = boardRepository.findById(id).orElseThrow(() -> new IllegalArgumentException("댓글 쓰기 실패"));

        dto.setUser(user);
        dto.setBoard(board);

        Comment comment = dto.toEntity();
        commentRepository.save(comment);

        return dto.getId();
    }

    @Transactional(readOnly = true)
    public List<CommentResponseDto> findAll(Long id) {
        Board board = boardRepository.findById(id).orElseThrow(() ->
                new IllegalArgumentException("게시글이 없습니다. id: " + id));
        List<Comment> comments = board.getComments();
        return comments.stream().map(CommentResponseDto::new).collect(Collectors.toList());
    }

    @Transactional
    public void update(Long id, CommentRequestDto dto) {
        Comment comment = commentRepository.findById(id).orElseThrow(() ->
                new IllegalArgumentException("댓글이 없습니다." + id));
        comment.update(dto.getComment());
    }
    @Transactional
    public void delete(Long id) {
        Comment comment = commentRepository.findById(id).orElseThrow(() ->
                new IllegalArgumentException("댓글이 없습니다. id=" + id));
        commentRepository.delete(comment);
    }
}
