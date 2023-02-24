package com.seb42.stackoverflow.board.service;

import com.seb42.stackoverflow.board.entity.Board;
import com.seb42.stackoverflow.board.repository.BoardRepository;
import com.seb42.stackoverflow.exception.BusinessLogicException;
import com.seb42.stackoverflow.exception.ExceptionCode;
import com.seb42.stackoverflow.user.entity.User;
import com.seb42.stackoverflow.user.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.time.LocalDateTime;
import java.util.Optional;

@Service
@Transactional
@RequiredArgsConstructor
public class BoardService {
    private final UserService userService;
    private final BoardRepository boardRepository;

    //게시글 생성
    public Board saveBoard(Board board, long userId){
        User findUser = userService.findVerifiedUser(userId);
        Board makeBoard = createBoard(board, findUser);
        return boardRepository.save(makeBoard);
    }

    public Board createBoard(Board board, User user){
        board.setUser(user);
        user.getBoards().add(board);
        return board;
    }

    //게시글 수정
    public Board updateBoard(Board board, long userId){
        Board findBoard = findVerifiedBoard(board.getBoardId());

        if(board.getUser().getUserId() != userId){
            throw new BusinessLogicException(ExceptionCode.USER_UNAUTHORIZED);
        }

        board.setTitle(board.getTitle());
        board.setContent(board.getContent());
        findBoard.setRegdate(LocalDateTime.now());

        return boardRepository.save(findBoard);
    }

    //게시글 찾기
    public Board findBoard(long boardId){
        return findVerifiedBoard(boardId);
    }

    public Page<Board> findBoards(int page, int size){
        return boardRepository.findAll(PageRequest.of(page, size, Sort.by("boardId").descending()));
    }

    private Board findVerifiedBoard(long boardId){
        Optional<Board> optionalBoard = boardRepository.findByBoardId(boardId);
        Board findBoard = boardRepository.findByBoardId(boardId)
                .orElseThrow(()->new BusinessLogicException(ExceptionCode.BOARD_NOT_FOUND));
        return findBoard;
    }

//    private void VerifiedNoBoard(Page<Board> findAllBoard){
//        if(findAllBoard.getTotalElements() == 0){
//            throw new BusinessLogicException(ExceptionCode.BOARD_NOT_FOUND);
//        }
//    }

//    public Page<Board> searchBoards(String keyword,int page, int size, String sort){
//        PageRequest pageRequest = PageRequest.of(page, size, Sort.by(sort).descending());
//        List<Board> searchResult = boardRepository.searchBoardByKeyword(keyword);
//        int start = (int)pageRequest.getOffset();
//        int end = Math.min((start + pageRequest.getPageSize()), searchResult.size());
//        Page<Board> boards = new PageImpl<>(searchResult.subList(start, end), pageRequest, searchResult.size());
//
//        VerifiedNoBoard(boards);
//        return boards;
//    }

    //게시글 삭제
    public void deleteBoard(long boardId, long userId){
        Optional<Board> optionalBoard = boardRepository.findByBoardId(boardId);
        optionalBoard.ifPresentOrElse(board -> {
            if(board.getUser().getUserId() != userId){
                throw new BusinessLogicException(ExceptionCode.USER_UNAUTHORIZED);
            }
//            if(!Objects.equals(board.getUser().getUserId(), userId)){
//                throw new BusinessLogicException(ExceptionCode.USER_UNAUTHORIZED);
//            }
            boardRepository.delete(board);
        }, () -> {
            return;
        });
    }
}
