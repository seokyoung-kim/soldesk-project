package com.example.demo.mapper;

import com.example.demo.dto.CmuBoardDto;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface CmuBoardMapper {
    List<CmuBoardDto> selectCmuBoardList() throws Exception;

    CmuBoardDto selectCmuBoardDetail(int cmuId) throws Exception;

    void insertCmuBoard(CmuBoardDto cmuBoard) throws Exception;

    void updateCmuHitCount(int cmuId) throws Exception;

    void updateCmuBoard(CmuBoardDto cmuBoard) throws Exception;

    void deleteCmuBoard(int cmuId) throws Exception;
}