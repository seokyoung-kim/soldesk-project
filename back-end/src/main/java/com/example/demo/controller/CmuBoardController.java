package com.example.demo.controller;


import com.example.demo.dto.CmuBoardDto;
import com.example.demo.service.CmuBoardService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*", maxAge = 3100)
@RestController
@RequestMapping("/api/cmu")
public class CmuBoardController {
    
    @Autowired
    private CmuBoardService cmuBoardService;

    @GetMapping
    public List<CmuBoardDto> openCmuBoardList() throws Exception {
        return cmuBoardService.selectCmuBoardList();
    }

    @GetMapping("/{cmuId}")
    public CmuBoardDto openCmuBoardDetail(@PathVariable("cmuId") int cmuId) throws Exception {
        return cmuBoardService.selectCmuBoardDetail(cmuId);
    }

    @PostMapping("/write")
    public void insertCmuBoard(@RequestBody CmuBoardDto cmuBoard) throws Exception {
        cmuBoardService.insertCmuBoard(cmuBoard);
    }

    @PutMapping("/{cmuId}")
    public String updatdCmuBoard(@RequestBody CmuBoardDto cmuBoard) throws Exception {
        cmuBoardService.updateCmuBoard(cmuBoard);
        return "redirect:/cmu";
    }

    @RequestMapping("/{cmuId}")
    public String deleteStudyBoard(@PathVariable("cmuId") int cmuId) throws Exception {
        cmuBoardService.deleteCmuBoard(cmuId);
        return "redirect:/cmu";
    }
}