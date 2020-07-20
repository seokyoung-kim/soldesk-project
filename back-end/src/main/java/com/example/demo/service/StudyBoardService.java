package com.example.demo.service;

import com.example.demo.dto.StudyBoardDto;

import java.util.List;

public interface StudyBoardService {
    List<StudyBoardDto> selectStudyBoardList() throws Exception;

    StudyBoardDto selectStudyBoardDetail(int stuId) throws Exception;

    void insertStudyBoard(StudyBoardDto studyBoard) throws Exception;

    void updateStudyBoard(StudyBoardDto studyBoard) throws Exception;

    void deleteStudyBoard(int stuId) throws Exception;
}
