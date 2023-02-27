package com.seb42.stackoverflow.user.service;

import com.seb42.stackoverflow.auth.utils.CustomAuthorityUtils;
import com.seb42.stackoverflow.exception.BusinessLogicException;
import com.seb42.stackoverflow.exception.ExceptionCode;
import com.seb42.stackoverflow.user.entity.User;
import com.seb42.stackoverflow.user.repository.UserRepository;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;

@Service
@Transactional
public class UserService {
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final CustomAuthorityUtils authorityUtils;

    public UserService(UserRepository userRepository,
                       PasswordEncoder passwordEncoder,
                       CustomAuthorityUtils authorityUtils) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
        this.authorityUtils = authorityUtils;
    }

    //가입
    public User createUser(User user){
        verifyExistsEmail(user.getEmail());

        String encryptedPassword = passwordEncoder.encode(user.getPassword());
        user.setPassword(encryptedPassword);

        List<String> roles = authorityUtils.createRoles(user.getEmail());
        user.setRoles(roles);

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
