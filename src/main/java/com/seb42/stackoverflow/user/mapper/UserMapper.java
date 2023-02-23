package com.seb42.stackoverflow.user.mapper;

import com.seb42.stackoverflow.user.dto.*;
import com.seb42.stackoverflow.user.entity.User;
import org.mapstruct.Mapper;
import org.mapstruct.ReportingPolicy;

@Mapper(componentModel = "spring", unmappedTargetPolicy = ReportingPolicy.IGNORE)
public interface UserMapper {
    User userPostDtoToUser(UserDto.Post requestBody);
    User userPatchDtoToUser(UserDto.Patch responseBody);

    User userLoginDtoToUser(UserDto.LoginDto responseBody);
    UserDto.response userToUserResponseDto(User user);
}
