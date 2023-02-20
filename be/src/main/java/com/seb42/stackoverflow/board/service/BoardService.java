package com.seb42.stackoverflow.board.service;

import com.seb42.stackoverflow.board.entity.Board;
import com.seb42.stackoverflow.board.mapper.BoardMapper;
import com.seb42.stackoverflow.board.repository.BoardRepository;
import com.seb42.stackoverflow.exception.BusinessLogicException;
import com.seb42.stackoverflow.exception.ExceptionCode;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Objects;
import java.util.Optional;

@Service
@Transactional
@RequiredArgsConstructor
public class BoardService {
    private final BoardRepository boardRepository;
    private final BoardMapper boardMapper;
    //private final UserService userService;

    public Board createBoard(Board board){
        //userService.findUser(board.getUserId());
        return boardRepository.save(board);
    }

    public Board updateBoard(Board board, long userId){
        Board findBoard = findVerifiedBoard(board.getBoardId());

        if(!board.getUserId().equals(userId)){
            throw new BusinessLogicException(ExceptionCode.USER_UNAUTHORIZED);
        }

        board.setTitle(board.getTitle());
        board.setContent(board.getContent());
        //findBoard.setModifiedAt(LocalDateTime.now());

        return boardRepository.save(findBoard);
    }

    public Board findBoard(long boardId){
        return findVerifiedBoard(boardId);
    }

    public Page<Board> findBoards(int page, int size){
        return boardRepository.findAll(PageRequest.of(page, size, Sort.by("boardId").descending()));
    }

    public void deleteBoard(long boardId, long userId){
        Optional<Board> optionalBoard = boardRepository.findById(boardId);
        optionalBoard.ifPresentOrElse(board -> {
            if(!Objects.equals(board.getUserId(), userId)){
                throw new BusinessLogicException(ExceptionCode.USER_UNAUTHORIZED);
            }
            boardRepository.delete(board);
        }, () -> {
            return;
        });
    }

    private Board findVerifiedBoard(long boardId){
        return boardRepository.findById(boardId).orElseThrow(()->new BusinessLogicException(ExceptionCode.BOARD_NOT_FOUND));
    }

    public Page<Board> searchBoards(String keyword,int page, int size, String sort){
        PageRequest pageRequest = PageRequest.of(page, size, Sort.by(sort).descending());
        List<Board> searchResult = boardRepository.searchBoardByKeyword(keyword);
        int start = (int)pageRequest.getOffset();
        int end = Math.min((start + pageRequest.getPageSize()), searchResult.size());
        Page<Board> boards = new PageImpl<>(searchResult.subList(start, end), pageRequest, searchResult.size());

        VerifiedNoBoard(boards);
        return boards;
    }

    private void VerifiedNoBoard(Page<Board> findAllBoard){
        if(findAllBoard.getTotalElements()==0){
            throw new BusinessLogicException(ExceptionCode.BOARD_NOT_FOUND);
        }
    }
}
