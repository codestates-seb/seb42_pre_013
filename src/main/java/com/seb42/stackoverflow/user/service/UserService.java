package com.seb42.stackoverflow.user.service;

import com.seb42.stackoverflow.exception.BusinessLogicException;
import com.seb42.stackoverflow.exception.ExceptionCode;
import com.seb42.stackoverflow.user.entity.User;
import com.seb42.stackoverflow.user.repository.UserRepository;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserService {
    private final UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    //가입
    public User createUser(User user){
        verifyExistsEmail(user.getEmail());

        return userRepository.save(user);
    }

    //조회
    public User findUser(long userId){
        Optional<User> findUser = userRepository.findById(userId);
        return findUser.get();
    }

    //로그인 ??
    public User loginUser(User user){
        Optional<User> optionalUser = userRepository.findByEmailAndPassword(user.getEmail(), user.getPassword());

        User findUser =
                optionalUser.orElseThrow(() ->
                        new BusinessLogicException(ExceptionCode.USER_NOT_FOUND));

        return findUser;
    }

    //회원 정보 수정
    public User updateUser(User user){
        User findUser = findVerifiedUser(user.getUserId());

        Optional.ofNullable(user.getName())
                .ifPresent(name -> findUser.setName(name));
        Optional.ofNullable(user.getPassword())
                .ifPresent(password -> findUser.setPassword(password));

        return userRepository.save(findUser);
    }

    //삭제
    public void deleteUser(long userId){
        User findUser = findVerifiedUser(userId);

        userRepository.delete(findUser);
    }

    //이미 존재하는 회원인지 검증
    public User findVerifiedUser(long userId){
        Optional<User> optionalUser = userRepository.findById(userId);

        User findUser =
                optionalUser.orElseThrow(() ->
                        new BusinessLogicException(ExceptionCode.USER_NOT_FOUND));
        return findUser;
    }

    //이메일 중복 검증
    private void verifyExistsEmail(String email) {
        Optional<User> user = userRepository.findByEmail(email);
        if (user.isPresent())
            throw new BusinessLogicException(ExceptionCode.USER_EXISTS);
    }
}
