package com.seb42.stackoverflow.user.mapper;

import com.seb42.stackoverflow.user.dto.UserDto;
import com.seb42.stackoverflow.user.entity.User;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2023-02-27T02:15:00+0900",
    comments = "version: 1.5.1.Final, compiler: javac, environment: Java 11.0.17 (Azul Systems, Inc.)"
)
@Component
public class UserMapperImpl implements UserMapper {

    @Override
    public User userPostDtoToUser(UserDto.Post requestBody) {
        if ( requestBody == null ) {
            return null;
        }

        User user = new User();

        user.setEmail( requestBody.getEmail() );
        user.setPassword( requestBody.getPassword() );
        user.setName( requestBody.getName() );

        return user;
    }

    @Override
    public User userPatchDtoToUser(UserDto.Patch responseBody) {
        if ( responseBody == null ) {
            return null;
        }

        User user = new User();

        user.setUserId( responseBody.getUserId() );
        user.setPassword( responseBody.getPassword() );
        user.setName( responseBody.getName() );

        return user;
    }

    @Override
    public User userLoginDtoToUser(UserDto.LoginDto responseBody) {
        if ( responseBody == null ) {
            return null;
        }

        User user = new User();

        user.setUserId( responseBody.getUserId() );
        user.setEmail( responseBody.getEmail() );
        user.setPassword( responseBody.getPassword() );

        return user;
    }

    @Override
    public UserDto.response userToUserResponseDto(User user) {
        if ( user == null ) {
            return null;
        }

        long userId = 0L;
        String email = null;
        String password = null;
        String name = null;

        userId = user.getUserId();
        email = user.getEmail();
        password = user.getPassword();
        name = user.getName();

        UserDto.response response = new UserDto.response( userId, email, password, name );

        return response;
    }
}
