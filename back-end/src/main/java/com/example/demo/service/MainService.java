package com.example.demo.service;

import com.example.demo.dto.MainDto;

import java.util.List;

public interface MainService {
    List<MainDto> mainList();
    MainDto selectMain(int mainId);
    void insertMain(MainDto username);
    void updateMain(MainDto username);
    void deleteMain(int mainId);
}
