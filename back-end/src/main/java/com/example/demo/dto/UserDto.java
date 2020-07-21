package com.example.demo.dto;

import lombok.Data;

@Data
public class UserDto {
    private int userId;
    private String userEmail;
    private String userNick;
    private String userPass;
    private int userOpt;
}