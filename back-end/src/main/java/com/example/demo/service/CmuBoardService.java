package com.example.demo.service;

import com.example.demo.dto.CmuBoardDto;

import java.util.List;

public interface CmuBoardService {
    List<CmuBoardDto> selectCmuBoardList() throws Exception;

    CmuBoardDto selectCmuBoardDetail(int cmuId) throws Exception;

    void insertCmuBoard(CmuBoardDto cmuBoard) throws Exception;

    void updateCmuBoard(CmuBoardDto cmuBoard) throws Exception;

    void deleteCmuBoard(int cmuId) throws Exception;
}