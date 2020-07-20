package com.example.demo.controller;


import com.example.demo.dto.StudyBoardDto;
import com.example.demo.service.StudyBoardService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*", maxAge = 3100)
@RestController
@RequestMapping("/api/study")
public class StudyBoardController {

    @Autowired
    private StudyBoardService studyBoardService;

    @GetMapping
    public List<StudyBoardDto> openStudyBoardList() throws Exception {
        return studyBoardService.selectStudyBoardList();
    }

    @GetMapping("/{stuId}")
    public StudyBoardDto openStudyBoardDetail(@PathVariable("stuId") int stuId) throws Exception {
        return studyBoardService.selectStudyBoardDetail(stuId);
    }

    @PostMapping("/write")
    public void insertStudyBoard(@RequestBody StudyBoardDto studyBoard) throws Exception {
        studyBoardService.insertStudyBoard(studyBoard);
    }

    @PutMapping("/{stuId}")
    public String updateStudyBoard(@RequestBody StudyBoardDto studyBoard) throws Exception {
        studyBoardService.updateStudyBoard(studyBoard);
        return "redirect:/study";
    }

    @RequestMapping("/{stuId}")
    public String deleteStudyBoard(@PathVariable("stuId") int stuId) throws Exception {
        studyBoardService.deleteStudyBoard(stuId);
        return "redirect:/study";
    }


}
