package com.example.demo.service;

import com.example.demo.dto.UserDto;
import com.example.demo.mapper.UserMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserServiceImpl implements UserService{
    
    @Autowired
    private UserMapper userMapper;

    @Override
    public List<UserDto> userList() throws Exception{
        return userMapper.userList();
    }

    @Override
    public UserDto fetchUserByuserID(int userId) throws Exception {
        return userMapper.fetchUserByuserID(userId);
    }

    @Override
    public void insertUser(UserDto user) throws Exception{
        userMapper.insertUser(user);
    }

    @Override
    public void updateUser(UserDto user) throws Exception{
        userMapper.updateUser(user);
    }

    @Override
    public void deleteUser(int userId) throws Exception{
        userMapper.deleteUser(userId);
    }

    
}