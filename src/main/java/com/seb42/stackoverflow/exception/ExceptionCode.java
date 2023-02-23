package com.seb42.stackoverflow.exception;

import lombok.Getter;

@Getter
public enum ExceptionCode {
    BOARD_NOT_FOUND(404, "Question not found"),
    BOARD_EXIST(409, "Question Exist"),
    USER_UNAUTHORIZED(403, "User unauthorized"),
    MEMBER_NOT_FOUND(404, "Member Not Found"),
    MEMBER_EXISTS(409, "Member exists");

    private final int status;
    private final String message;

    ExceptionCode(int statusCode, String message) {
        this.status = statusCode;
        this.message = message;
    }
}
