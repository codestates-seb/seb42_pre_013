package com.seb42.stackoverflow.board.mapper;

import com.seb42.stackoverflow.board.dto.BoardPatchDto;
import com.seb42.stackoverflow.board.dto.BoardPostDto;
import com.seb42.stackoverflow.board.dto.BoardResponseDto;
import com.seb42.stackoverflow.board.entity.Board;
import java.util.ArrayList;
import java.util.List;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2023-02-27T02:14:59+0900",
    comments = "version: 1.5.1.Final, compiler: javac, environment: Java 11.0.17 (Azul Systems, Inc.)"
)
@Component
public class BoardMapperImpl implements BoardMapper {

    @Override
    public Board boardPostDto(BoardPostDto boardPostDto) {
        if ( boardPostDto == null ) {
            return null;
        }

        Board board = new Board();

        board.setBoardId( boardPostDto.getBoardId() );
        board.setTitle( boardPostDto.getTitle() );
        board.setContent( boardPostDto.getContent() );

        return board;
    }

    @Override
    public Board boardPatchDto(BoardPatchDto boardPatchDto) {
        if ( boardPatchDto == null ) {
            return null;
        }

        Board board = new Board();

        board.setBoardId( boardPatchDto.getBoardId() );
        board.setTitle( boardPatchDto.getTitle() );
        board.setContent( boardPatchDto.getContent() );

        return board;
    }

    @Override
    public BoardResponseDto boardResponseDto(Board board) {
        if ( board == null ) {
            return null;
        }

        BoardResponseDto boardResponseDto = new BoardResponseDto();

        return boardResponseDto;
    }

    @Override
    public List<BoardResponseDto> boardResponseDtoList(List<Board> boards) {
        if ( boards == null ) {
            return null;
        }

        List<BoardResponseDto> list = new ArrayList<BoardResponseDto>( boards.size() );
        for ( Board board : boards ) {
            list.add( boardResponseDto( board ) );
        }

        return list;
    }
}
