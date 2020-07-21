package com.example.demo.controller;

import com.example.demo.dto.CmuReplyDto;
import com.example.demo.service.CmuReplyService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "*", maxAge = 3100)
@RestController
@RequestMapping("/api/cmrp")
public class CmuReplyController {
    
    @Autowired
    private CmuReplyService cmuReplyService;

    @GetMapping
    public List<CmuReplyDto> openCmuReplyList() throws Exception {
        return cmuReplyService.selectCmuReplyList();
    }

    @PostMapping("/write")
    public void insertCmuReply(@RequestBody CmuReplyDto cmuReply) throws Exception {
        cmuReplyService.insertCmuReply(cmuReply);
    }

    @PutMapping("/{cmrpId}")
    public String updateCmuReply(@RequestBody CmuReplyDto cmuReply) throws Exception {
        cmuReplyService.updateCmuReply(cmuReply);
        return "redirect:/cmrp";
    }

    @RequestMapping("/{cmrpId}")
    public String deleteCmuReply(@PathVariable("cmrpId") int cmrpId) throws Exception {
        cmuReplyService.deleteCmuReply(cmrpId);
        return "redirect:/cmrp";
    }
    
}