package com.example.demo.mapper;

import com.example.demo.dto.StudyBoardDto;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface StudyBoardMapper {
    List<StudyBoardDto> selectStudyBoardList() throws Exception;

    StudyBoardDto selectStudyBoardDetail(int stuId) throws Exception;

    void insertStudyBoard(StudyBoardDto studyBoard) throws Exception;

    void updateStudyHitCount(int stuId) throws Exception;

    void updateStudyBoard(StudyBoardDto studyBoard) throws Exception;

    void deleteStudyBoard(int stuId) throws Exception;

}
