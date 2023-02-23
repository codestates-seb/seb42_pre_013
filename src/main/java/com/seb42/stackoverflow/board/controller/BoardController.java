package com.seb42.stackoverflow.board.controller;

import lombok.RequiredArgsConstructor;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping(path = "/board")
@Validated
@RequiredArgsConstructor
public class BoardController {
//    private final BoardService boardService;
//    private final BoardMapper boardMapper;
//
//    @PostMapping
//    public ResponseEntity postBoard(@Valid @RequestBody BoardPostDto boardPostDto){
//        Board board = boardService.saveBoard(boardMapper.boardPostDto(boardPostDto), memberId);
//        return new ResponseEntity<>(HttpStatus.CREATED);
//    }
//
//    @PatchMapping("/{board-id}")
//    public ResponseEntity patchBoard(@PathVariable("board-id") @Positive @NotNull long boardId,
//                                     @Valid @RequestBody BoardPatchDto boardPatchDto){
//        boardPatchDto.setBoardId(boardId);
//        Board board = boardMapper.boardPatchDto(boardPatchDto);
//        Board updatedBoard = boardService.updateBoard(board, memberId);
//        return new ResponseEntity<>(new SingleResponseDto<>(), HttpStatus.OK);
//    }
//
//    //전체 게시글
//    @GetMapping
//    public ResponseEntity getBoard(@Positive @RequestParam("page") int page,
//                                   @Positive @RequestParam("size") int size,
//                                   @RequestParam("sort") String sort){
//        Page<Board> searchResult = boardService.searchBoards(page-1, size, sort);
//        List<Board> boards = searchResult.getContent();
//
//        return new ResponseEntity<>(new SingleResponseDto<>(), HttpStatus.OK);
//    }
//
//    //검색
////    @GetMapping("/{keyword}")
////    public ResponseEntity getBoard(@RequestParam("search") String keyword,
////                                   @Positive @RequestParam("page") int page,
////                                   @Positive @RequestParam("size") int size,
////                                   @RequestParam("sort") String sort){
////        Page<Board> searchResult = boardService.searchBoards(keyword, page-1, size, sort);
////        List<Board> boards = searchResult.getContent();
////
////        return new ResponseEntity<>(new MultiResponseDto<>(), HttpStatus.OK);
////    }
//
//    @DeleteMapping("/{board-id}")
//    public ResponseEntity deleteBoard(){
//        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
//    }
}
