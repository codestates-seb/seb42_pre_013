package com.seb42.stackoverflow.user.dto;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.validation.constraints.Email;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;

public class UserDto {
    @Getter
    @Setter
    @AllArgsConstructor
    @NoArgsConstructor
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
    @Setter
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
    @NoArgsConstructor
    public static class LoginDto{
        private long userId;

        @NotNull
        @Email
        private String email;

        @NotNull
        private String password;

        private static String name;

        public static String getName() {
            return name;
        }
    }

    @AllArgsConstructor
    @Getter
    @Setter
    public static class response {
        private long userId;
        private String email;
        private String password;
        private String name;
    }
}
