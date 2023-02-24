package com.seb42.stackoverflow.apis;

import com.seb42.stackoverflow.comment.annotation.LoginUser;
import com.seb42.stackoverflow.comment.dto.CommentRequestDto;
import com.seb42.stackoverflow.comment.service.CommentService;
import com.seb42.stackoverflow.user.dto.UserDto;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RequiredArgsConstructor
@RequestMapping("/api")
@RestController
public class CommentController {
    private final CommentService commentService;

    @RequestMapping("posts/{id}/comments")
    public ResponseEntity commentSave(@PathVariable Long id, @RequestBody CommentRequestDto dto, @LoginUser UserDto memberDto) {
        return ResponseEntity.ok(commentService.commentSave(UserDto.LoginDto.getName(), id, dto));
    }

}
