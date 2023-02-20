package com.seb42.stackoverflow.board.mapper;

import com.seb42.stackoverflow.board.dto.BoardPatchDto;
import com.seb42.stackoverflow.board.dto.BoardPostDto;
import com.seb42.stackoverflow.board.dto.BoardResponseDto;
import com.seb42.stackoverflow.board.entity.Board;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper(componentModel = "spring")
public interface BoardMapper {
    Board boardPostDto(BoardPostDto boardPostDto);
    Board boardPatchDto(BoardPatchDto boardPatchDto);
    BoardResponseDto boardResponseDto(Board board);
    List<BoardResponseDto> boardResponseDtoList(List<Board> boards);
}
