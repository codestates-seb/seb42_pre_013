package com.seb42.stackoverflow.member.service;

import com.seb42.stackoverflow.exception.BusinessLogicException;
import com.seb42.stackoverflow.exception.ExceptionCode;
import com.seb42.stackoverflow.member.entity.Member;
import com.seb42.stackoverflow.member.repository.MemberRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
public class MemberService {
    private final MemberRepository memberRepository;

    public MemberService(MemberRepository memberRepository) {
        this.memberRepository = memberRepository;
    }

    //가입
    public Member createMember(Member member){
//        verifyExistsEmail(member.getEmail());

        return memberRepository.save(member);
    }

    //조회
    public Member findMember(long memberId){
        Optional<Member> findMember = memberRepository.findById(memberId);
        return findMember.get();
    }

    //로그인 ??
    public Member loginMember(Member member){
        Optional<Member> optionalMember = memberRepository.findByEmailAndPassword(member.getEmail(), member.getPassword());

        Member findMember =
                optionalMember.orElseThrow(() ->
                        new BusinessLogicException(ExceptionCode.MEMBER_NOT_FOUND));

        return findMember;
    }

    //회원 정보 수정
    public Member updateMember(Member member){
        Member findMember = findVerifiedMember(member.getMemberId());

        Optional.ofNullable(member.getName())
                .ifPresent(name -> findMember.setName(name));
        Optional.ofNullable(member.getPassword())
                .ifPresent(password -> findMember.setPassword(password));

        return memberRepository.save(findMember);
    }

    //삭제
    public void deleteMember(long memberId){
        Member findMember = findVerifiedMember(memberId);

        memberRepository.delete(findMember);
    }

    //이미 존재하는 회원인지 검증
    public Member findVerifiedMember(long memberId){
        Optional<Member> optionalMember = memberRepository.findById(memberId);

        Member findMember =
                optionalMember.orElseThrow(() ->
                        new BusinessLogicException(ExceptionCode.MEMBER_NOT_FOUND));
        return findMember;
    }

    //이메일 중복 검증
    private void verifyExistsEmail(String email) {
        Optional<Member> member = memberRepository.findByEmail(email);
        if (member.isPresent())
            throw new BusinessLogicException(ExceptionCode.MEMBER_EXISTS);
    }
}
