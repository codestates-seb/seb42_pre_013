package com.seb42.stackoverflow.member.mapper;

import com.seb42.stackoverflow.member.dto.*;
import com.seb42.stackoverflow.member.entity.Member;
import org.mapstruct.Mapper;
import org.mapstruct.ReportingPolicy;

@Mapper(componentModel = "spring", unmappedTargetPolicy = ReportingPolicy.IGNORE)
public interface MemberMapper {
    Member memberPostDtoToMember(MemberDto.Post requestBody);
    Member memberPatchDtoToMember(MemberDto.Patch responseBody);

    Member memberLoginDtoToMember(MemberDto.LoginDto responseBody);
    MemberDto.response memberToMemberResponseDto(Member member);
}
