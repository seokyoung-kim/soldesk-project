package com.example.demo.service;

import com.example.demo.dto.UserDto;

import java.util.List;

public interface UserService {
    
    List<UserDto> userList() throws Exception;

    UserDto fetchUserByuserID(int userId) throws Exception;

    void insertUser(UserDto user) throws Exception;

    void updateUser(UserDto user) throws Exception;

    void deleteUser(int userId) throws Exception;
}