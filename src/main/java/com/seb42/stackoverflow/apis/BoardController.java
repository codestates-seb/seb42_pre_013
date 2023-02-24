package com.seb42.stackoverflow.apis;

import com.seb42.stackoverflow.board.dto.BoardPatchDto;
import com.seb42.stackoverflow.board.dto.BoardPostDto;
import com.seb42.stackoverflow.board.entity.Board;
import com.seb42.stackoverflow.board.mapper.BoardMapper;
import com.seb42.stackoverflow.board.service.BoardService;
import com.seb42.stackoverflow.user.dto.UserDto;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Positive;
import java.net.URI;
import java.util.List;

@RestController
@RequestMapping(path = "stackoverflow/board")
@Validated
@RequiredArgsConstructor
public class BoardController {
    private final BoardService boardService;
    private final BoardMapper boardMapper;

    //게시글 작성
    @PostMapping
    public ResponseEntity postBoard(@Valid @RequestBody BoardPostDto boardPostDto,
                                    @Valid @RequestBody UserDto.LoginDto loginUser){
        long loginUserId = loginUser.getUserId();
        Board board = boardService.saveBoard(boardMapper.boardPostDto(boardPostDto), loginUserId);
        return new ResponseEntity<>(boardMapper.boardResponseDto(board), HttpStatus.CREATED);
    }

    //게시글 수정
    @PatchMapping("/{board-id}")
    public ResponseEntity patchBoard(@PathVariable("board-id") @Positive @NotNull long boardId,
                                     @Valid @RequestBody BoardPatchDto boardPatchDto,
                                     @Valid @RequestBody UserDto.LoginDto loginUser){
        long loginUserId = loginUser.getUserId();
        boardPatchDto.setBoardId(boardId);
        Board board = boardMapper.boardPatchDto(boardPatchDto);
        Board updatedBoard = boardService.updateBoard(board, loginUserId);
        return new ResponseEntity<>(boardMapper.boardResponseDto(updatedBoard), HttpStatus.OK);
    }

    //선택한 게시글 조회
    @GetMapping("/{board-id}")
    public ResponseEntity getBoard(@PathVariable("board-id") @Positive @NotNull long boardId){
        Board board = boardService.findBoard(boardId);
        return new ResponseEntity<>(boardMapper.boardResponseDto(board), HttpStatus.OK);
    }

    //전체 게시글 목록
    @GetMapping
    public ResponseEntity getBoards(@Positive @RequestParam("page") int page,
                                   @Positive @RequestParam("size") int size){
        Page<Board> searchResult = boardService.findBoards(page-1, size);
        List<Board> boards = searchResult.getContent();

        return new ResponseEntity<>(boardMapper.boardResponseDtoList(boards), HttpStatus.OK);
    }

//    //게시글 검색
//    @GetMapping("/{keyword}")
//    public ResponseEntity getBoard(@RequestParam("search") String keyword,
//                                   @Positive @RequestParam("page") int page,
//                                   @Positive @RequestParam("size") int size,
//                                   @RequestParam("sort") String sort){
//        Page<Board> searchResult = boardService.searchBoards(keyword, page-1, size, sort);
//        List<Board> boards = searchResult.getContent();
//
//        return new ResponseEntity<>(new MultiResponseDto<>(), HttpStatus.OK);
//    }

    //게시글 삭제
    @DeleteMapping("/{board-id}")
    public ResponseEntity deleteBoard(@PathVariable("board-id") @Positive @NotNull long boardId){
        UserDto.LoginDto loginUser = new UserDto.LoginDto();
        long loginUserId = loginUser.getUserId();
        boardService.deleteBoard(boardId, loginUserId);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
