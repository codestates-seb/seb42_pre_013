package com.seb42.stackoverflow.member.controller;

import com.seb42.stackoverflow.member.dto.*;
import com.seb42.stackoverflow.member.entity.Member;
import com.seb42.stackoverflow.member.mapper.MemberMapper;
import com.seb42.stackoverflow.member.service.MemberService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/users")
public class MemberController {
    private final MemberService memberService;
    private final MemberMapper mapper;

    public MemberController(MemberService memberService, MemberMapper mapper) {
        this.memberService = memberService;
        this.mapper = mapper;
    }

    //가입
    @PostMapping("/signup")
    public ResponseEntity postMember(@Valid @RequestBody MemberDto.Post requestBody){
        Member member = mapper.memberPostDtoToMember(requestBody);

        Member response = memberService.createMember(member);

        return new ResponseEntity<>(mapper.memberToMemberResponseDto(response),HttpStatus.CREATED);
    }

    //로그인
    @PostMapping("/login")
    public ResponseEntity loginMember(@RequestBody MemberDto.LoginDto requestBody){
        Member response = memberService.loginMember(mapper.memberLoginDtoToMember(requestBody));
        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    //로그아웃
//    @GetMapping("/logout/{member-id}")
//    public ResponseEntity logoutMember(@PathVariable("member-id") long memberId){
//        Member response = memberService.findMember(memberId);
//
//        return new ResponseEntity<>(mapper.memberToMemberResponseDto(response),HttpStatus.OK);
//    }


    //정보 수정
    @PatchMapping("/edit/{member-id}")
    public ResponseEntity patchMember(@PathVariable("member-id") long memberId,
                                      @RequestBody MemberDto.Patch requestBody){
        requestBody.setMemberId(memberId);

        Member response = memberService.updateMember(mapper.memberPatchDtoToMember(requestBody));

        return new ResponseEntity<>(mapper.memberToMemberResponseDto(response), HttpStatus.OK);
    }

    //삭제
    @DeleteMapping("/delete/{member-id}")
    public ResponseEntity deleteMember(@PathVariable("member-id") long memberId){
        memberService.deleteMember(memberId);

        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    //회원 조회
    @GetMapping("/{member-id}")
    public ResponseEntity getMember(@PathVariable("member-id") long memberId){
        Member member = memberService.findMember(memberId);

        return new ResponseEntity<>(mapper.memberToMemberResponseDto(member), HttpStatus.OK);
    }
}
