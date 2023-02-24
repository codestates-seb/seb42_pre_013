package com.seb42.stackoverflow.comment.service;

import com.seb42.stackoverflow.comment.dto.CommentRequestDto;
import com.seb42.stackoverflow.comment.entity.Comment;
import com.seb42.stackoverflow.comment.entity.Posts;
import com.seb42.stackoverflow.comment.repository.CommentRepository;
import com.seb42.stackoverflow.comment.repository.PostsRepository;
import com.seb42.stackoverflow.user.entity.User;
import com.seb42.stackoverflow.user.repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
public class CommentService {

    private final CommentRepository commentRepository;
    private final UserRepository userRepository;
    private final PostsRepository postsRepository;
    @Transactional
    public Long commentSave(String name, Long id, CommentRequestDto dto) {
        User user = userRepository.findByName(name);
        Posts posts = postsRepository.findById(id).orElseThrow(() -> new IllegalArgumentException("댓글 쓰기 실패"));

        dto.setUser(user);
        dto.setPosts(posts);

        Comment comment = dto.toEntity();
        commentRepository.save(comment);

        return dto.getId();
    }
}
