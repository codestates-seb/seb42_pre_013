package com.seb42.stackoverflow.apis;

import com.seb42.stackoverflow.comment.dto.CommentRequestDto;
import com.seb42.stackoverflow.comment.dto.CommentResponseDto;
import com.seb42.stackoverflow.comment.service.CommentService;
import com.seb42.stackoverflow.user.dto.UserDto;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequiredArgsConstructor
@RequestMapping("/api")
@RestController
public class CommentController {
    private final CommentService commentService;

    @PostMapping("/board/{id}/comments")
    public ResponseEntity saveComment(@PathVariable Long id, @RequestBody CommentRequestDto dto, @RequestBody UserDto.response userDto){
        return ResponseEntity.ok(commentService.commentSave(userDto.getName(), id, dto));
    }

    @GetMapping("/board/{id}/comments")
    public List<CommentResponseDto> readComment(@PathVariable Long id) {
        return commentService.findAll(id);
    }

    @PutMapping({"/board/{id}/comments/{id}"})
    public ResponseEntity updateComment(@PathVariable Long id, @RequestBody CommentRequestDto dto) {
        commentService.update(id, dto);
        return ResponseEntity.ok(id);
    }

    @DeleteMapping("/board/{id}/comments/{id}")
    public ResponseEntity deleteComment(@PathVariable Long id) {
        commentService.delete(id);
        return ResponseEntity.ok(id);
    }
}
