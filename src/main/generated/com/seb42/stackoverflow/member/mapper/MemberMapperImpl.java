package com.seb42.stackoverflow.member.mapper;

import com.seb42.stackoverflow.member.dto.MemberDto;
import com.seb42.stackoverflow.member.entity.Member;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2023-02-22T17:16:06+0900",
    comments = "version: 1.5.1.Final, compiler: javac, environment: Java 11.0.18 (Azul Systems, Inc.)"
)
@Component
public class MemberMapperImpl implements MemberMapper {

    @Override
    public Member memberPostDtoToMember(MemberDto.Post requestBody) {
        if ( requestBody == null ) {
            return null;
        }

        Member member = new Member();

        member.setEmail( requestBody.getEmail() );
        member.setPassword( requestBody.getPassword() );
        member.setName( requestBody.getName() );

        return member;
    }

    @Override
    public Member memberPatchDtoToMember(MemberDto.Patch responseBody) {
        if ( responseBody == null ) {
            return null;
        }

        Member member = new Member();

        member.setMemberId( responseBody.getMemberId() );
        member.setPassword( responseBody.getPassword() );
        member.setName( responseBody.getName() );

        return member;
    }

    @Override
    public Member memberLoginDtoToMember(MemberDto.LoginDto responseBody) {
        if ( responseBody == null ) {
            return null;
        }

        Member member = new Member();

        member.setEmail( responseBody.getEmail() );
        member.setPassword( responseBody.getPassword() );

        return member;
    }

    @Override
    public MemberDto.response memberToMemberResponseDto(Member member) {
        if ( member == null ) {
            return null;
        }

        long memberId = 0L;
        String email = null;
        String password = null;
        String name = null;

        memberId = member.getMemberId();
        email = member.getEmail();
        password = member.getPassword();
        name = member.getName();

        MemberDto.response response = new MemberDto.response( memberId, email, password, name );

        return response;
    }
}
