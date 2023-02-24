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
    date = "2023-02-24T00:55:03+0900",
    comments = "version: 1.5.1.Final, compiler: javac, environment: Java 11.0.18 (Azul Systems, Inc.)"
)
@Component
public class BoardMapperImpl implements BoardMapper {

    @Override
    public Board boardPostDto(BoardPostDto boardPostDto) {
        if ( boardPostDto == null ) {
            return null;
        }

        Board.BoardBuilder board = Board.builder();

        board.boardId( boardPostDto.getBoardId() );
        board.title( boardPostDto.getTitle() );
        board.content( boardPostDto.getContent() );

        return board.build();
    }

    @Override
    public Board boardPatchDto(BoardPatchDto boardPatchDto) {
        if ( boardPatchDto == null ) {
            return null;
        }

        Board.BoardBuilder board = Board.builder();

        board.boardId( boardPatchDto.getBoardId() );
        board.title( boardPatchDto.getTitle() );
        board.content( boardPatchDto.getContent() );

        return board.build();
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
