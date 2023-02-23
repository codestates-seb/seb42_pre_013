package com.seb42.stackoverflow.user.controller;

import com.seb42.stackoverflow.user.dto.*;
import com.seb42.stackoverflow.user.entity.User;
import com.seb42.stackoverflow.user.mapper.UserMapper;
import com.seb42.stackoverflow.user.service.UserService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
@RequestMapping("/users")
public class UserController {
    private final UserService userService;
    private final UserMapper mapper;

    public UserController(UserService userService, UserMapper mapper) {
        this.userService = userService;
        this.mapper = mapper;
    }

    //가입
    @PostMapping("/signup")
    public ResponseEntity postUser(@Valid @RequestBody UserDto.Post requestBody){
        User user = mapper.userPostDtoToUser(requestBody);

        User response = userService.createUser(user);

        return new ResponseEntity<>(mapper.userToUserResponseDto(response),HttpStatus.CREATED);
    }

    //로그인
    @PostMapping("/login")
    public ResponseEntity loginUser(@RequestBody UserDto.LoginDto requestBody){
        User response = userService.loginUser(mapper.userLoginDtoToUser(requestBody));
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
    @PatchMapping("/edit/{user-id}")
    public ResponseEntity patchMember(@PathVariable("user-id") long userId,
                                      @RequestBody UserDto.Patch requestBody){
        requestBody.setUserId(userId);

        User response = userService.updateUser(mapper.userPatchDtoToUser(requestBody));

        return new ResponseEntity<>(mapper.userToUserResponseDto(response), HttpStatus.OK);
    }

    //삭제
    @DeleteMapping("/delete/{user-id}")
    public ResponseEntity deleteMember(@PathVariable("user-id") long userId){
        userService.deleteUser(userId);

        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    //회원 조회
    @GetMapping("/{member-id}")
    public ResponseEntity getMember(@PathVariable("user-id") long userId){
        User response = userService.findUser(userId);

        return new ResponseEntity<>(mapper.userToUserResponseDto(response), HttpStatus.OK);
    }
}
