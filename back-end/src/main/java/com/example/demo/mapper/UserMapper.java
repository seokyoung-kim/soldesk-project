package com.example.demo.mapper;

import com.example.demo.dto.UserDto;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface UserMapper {
    List<UserDto> userList() throws Exception;

    UserDto fetchUserByuserID(int userId) throws Exception;

    void insertUser(UserDto user) throws Exception;

    void updateUser(UserDto user) throws Exception;

    void deleteUser(int userId) throws Exception;
}