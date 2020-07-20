package com.example.demo.service;

import com.example.demo.dto.StudyBoardDto;
import com.example.demo.mapper.StudyBoardMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class StudyBoardServiceImpl implements StudyBoardService{

    @Autowired
    private StudyBoardMapper studyBoardMapper;

    @Override
    public List<StudyBoardDto> selectStudyBoardList() throws Exception {
        return studyBoardMapper.selectStudyBoardList();
    }

    @Override
    public StudyBoardDto selectStudyBoardDetail(int stuId) throws Exception {
        StudyBoardDto studyBoard = studyBoardMapper.selectStudyBoardDetail(stuId);
        studyBoardMapper.updateStudyHitCount(stuId);
        return studyBoard;
    }

    @Override
    public void insertStudyBoard(StudyBoardDto studyBoard) throws Exception {
        studyBoardMapper.insertStudyBoard(studyBoard);
    }

    @Override
    public void updateStudyBoard(StudyBoardDto studyBoard) throws Exception {
        studyBoardMapper.updateStudyBoard(studyBoard);
    }

    @Override
    public void deleteStudyBoard(int stuId) throws Exception {
        studyBoardMapper.deleteStudyBoard(stuId);
    }
}
