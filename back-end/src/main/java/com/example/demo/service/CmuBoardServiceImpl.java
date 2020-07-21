package com.example.demo.service;

import com.example.demo.dto.CmuBoardDto;
import com.example.demo.mapper.CmuBoardMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CmuBoardServiceImpl implements CmuBoardService {
    
    @Autowired
    private CmuBoardMapper cmuBoardMapper;

    @Override
    public List<CmuBoardDto> selectCmuBoardList() throws Exception {
        return cmuBoardMapper.selectCmuBoardList();
    }

    @Override
    public CmuBoardDto selectCmuBoardDetail(int cmuId) throws Exception {
        CmuBoardDto cmuBoard = cmuBoardMapper.selectCmuBoardDetail(cmuId);
        cmuBoardMapper.updateCmuHitCount(cmuId);
        return cmuBoard;
    }

    @Override
    public void insertCmuBoard(CmuBoardDto cmuBoard) throws Exception {
        cmuBoardMapper.insertCmuBoard(cmuBoard);
    }

    @Override
    public void updateCmuBoard(CmuBoardDto cmuBoard) throws Exception {
        cmuBoardMapper.updateCmuBoard(cmuBoard);
    }

    @Override
    public void deleteCmuBoard(int cmuId) throws Exception {
        cmuBoardMapper.deleteCmuBoard(cmuId);
    }
}