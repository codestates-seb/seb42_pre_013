package com.seb42.stackoverflow.user.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

public class UserDto {
    @Getter
    @AllArgsConstructor
    public static class Post{
        @NotBlank
        @Email
        private String email;

        @NotBlank
        private String password;

        @NotBlank
        private String name;
    }

    @Getter
    public static class Patch {
        private long userId;

        private String name;

        private String password;

        public void setUserId(long userId) {
            this.userId = userId;
        }
    }

    @Getter
    @AllArgsConstructor
    public static class LoginDto{
        @NotNull
        @Email
        private String email;

        @NotNull
        private String password;
    }

    @AllArgsConstructor
    @Getter
    public static class response {
        private long userId;
        private String email;
        private String password;
        private String name;
    }
}
