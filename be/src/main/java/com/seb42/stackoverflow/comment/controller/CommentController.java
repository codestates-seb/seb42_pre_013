package com.seb42.stackoverflow.comment.controller;

import com.seb42.stackoverflow.comment.dto.CommentDto;
import com.seb42.stackoverflow.comment.service.CommentService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RequiredArgsConstructor
@RestController
public class CommentController {


    private final CommentService commentService;

    public ResponseEntity save(@PathVariable Long id, @RequestBody CommentDto.Request dto) {

        return ResponseEntity.ok(commentService.save())
    }



}
