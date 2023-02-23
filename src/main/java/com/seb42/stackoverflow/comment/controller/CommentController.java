package com.seb42.stackoverflow.comment.controller;

import com.seb42.stackoverflow.comment.dto.CommentRequestDto;
import com.seb42.stackoverflow.comment.service.CommentService;
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

    public ResponseEntity commentSave(@PathVariable Long id, @RequestBody CommentRequestDto dto) {
        return ResponseEntity.ok(commentService.commentSave);
    }
}
