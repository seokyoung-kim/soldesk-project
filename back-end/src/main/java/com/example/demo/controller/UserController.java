package com.example.demo.controller;

import com.example.demo.dto.UserDto;
import com.example.demo.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*", maxAge = 3100)
@RestController
@RequestMapping("/api/user")
public class UserController {
    
    @Autowired
    private UserService userService;

    @GetMapping
    public List<UserDto> openUserList() throws Exception {
        return userService.userList();
    }

    @GetMapping
    public UserDto fetchUserByuserID(@PathVariable("userId") int userId) throws Exception {
        return userService.fetchUserByuserID(userId);
    }

    @PostMapping("/write")
    public void insertUser(@RequestBody UserDto user) throws Exception {
        userService.insertUser(user);
    }

    @PutMapping("/{userId}")
    public String updateUser(@RequestBody UserDto user) throws Exception {
        userService.updateUser(user);
        return "redirect:/user";
    }

    @RequestMapping("/{userId}")
    public String deleteUser(@PathVariable("userId") int userId) throws Exception {
        userService.deleteUser(userId);
        return "redirect:/user";
    }

}