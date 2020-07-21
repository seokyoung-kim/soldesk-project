package com.example.demo.mapper;


import com.example.demo.dto.CmuReplyDto;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface CmuReplyMapper {
    
    List<CmuReplyDto> selectCmuReplyList() throws Exception;

    void insertCmuReply(CmuReplyDto cmuReply) throws Exception;

    void updateCmuReply(CmuReplyDto cmuReply) throws Exception;

    void deleteCmuReply(int cmrpId) throws Exception;
}