package com.example.demo.service;

import com.example.demo.dto.CmuReplyDto;
import com.example.demo.mapper.CmuReplyMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CmuReplyServiceImpl implements CmuReplyService {
    
    @Autowired
    private CmuReplyMapper cmuReplyMapper;

    @Override
    public List<CmuReplyDto> selectCmuReplyList() throws Exception {
        return cmuReplyMapper.selectCmuReplyList();
    }

    @Override
    public void insertCmuReply(CmuReplyDto cmuReply) throws Exception {
        cmuReplyMapper.insertCmuReply(cmuReply);
    }

    @Override
    public void updateCmuReply(CmuReplyDto cmuReply) throws Exception {
        cmuReplyMapper.updateCmuReply(cmuReply);
    }

    @Override
    public void deleteCmuReply(int cmrpId) throws Exception {
        cmuReplyMapper.deleteCmuReply(cmrpId);
    }

    
}