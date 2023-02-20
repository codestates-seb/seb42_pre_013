package com.seb42.stackoverflow.board.controller;

import com.seb42.stackoverflow.board.dto.BoardPatchDto;
import com.seb42.stackoverflow.board.dto.BoardPostDto;
import com.seb42.stackoverflow.board.entity.Board;
import com.seb42.stackoverflow.board.mapper.BoardMapper;
import com.seb42.stackoverflow.board.service.BoardService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Positive;
import java.util.List;

@RestController
@RequestMapping(path = "/board")
@Validated
@RequiredArgsConstructor
public class BoardController {
    private final BoardService boardService;
    private final BoardMapper boardMapper;

    @PostMapping
    public ResponseEntity postBoard(@Valid @RequestBody BoardPostDto boardPostDto){
        Board board = boardService.createBoard(boardMapper.boardPostDto(boardPostDto));
        return new ResponseEntity<>(HttpStatus.CREATED);
    }

    @PatchMapping("/{board-id}")
    public ResponseEntity patchBoard(@PathVariable("board-id") @Positive @NotNull long boardId,
                                     @Valid @RequestBody BoardPatchDto boardPatchDto){
        boardPatchDto.setBoardId(boardId);
        Board board = boardMapper.boardPatchDto(boardPatchDto);
        Board updatedBoard = boardService.updateBoard(board, userId);
        return new ResponseEntity<>(HttpStatus.OK);
    }

    //전체 게시글
    @GetMapping
    public ResponseEntity getBoard(@Positive @RequestParam("page") int page,
                                   @Positive @RequestParam("size") int size,
                                   @RequestParam("sort") String sort){
        Page<Board> searchResult = boardService.searchBoards(page-1, size, sort);
        List<Board> boards = searchResult.getContent();

        return new ResponseEntity<>(HttpStatus.OK);
    }

    //검색
    @GetMapping("/{keyword}")
    public ResponseEntity getBoard(@RequestParam("search") String keyword,
                                   @Positive @RequestParam("page") int page,
                                   @Positive @RequestParam("size") int size,
                                   @RequestParam("sort") String sort){
        Page<Board> searchResult = boardService.searchBoards(keyword, page-1, size, sort);
        List<Board> boards = searchResult.getContent();

        return new ResponseEntity<>(HttpStatus.OK);
    }

    @DeleteMapping("/{board-id}")
    public ResponseEntity deleteBoard(){
        return new ResponseEntity(HttpStatus.NO_CONTENT);
    }
}
