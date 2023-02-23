package com.seb42.stackoverflow.board.repository;


import com.seb42.stackoverflow.board.entity.Board;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BoardRepository extends JpaRepository<Board, Long> {

    //List<Board> searchBoardByKeyword(@Param("keyword") String keyword);
}
