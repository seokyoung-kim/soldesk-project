package com.example.demo.service;

import com.example.demo.dto.CmuReplyDto;

import java.util.List;

public interface CmuReplyService {
    List<CmuReplyDto> selectCmuReplyList() throws Exception;
    
    void insertCmuReply(CmuReplyDto cmuReply) throws Exception;

    void updateCmuReply(CmuReplyDto cmuReply) throws Exception;

    void deleteCmuReply(int cmrpId) throws Exception;


}