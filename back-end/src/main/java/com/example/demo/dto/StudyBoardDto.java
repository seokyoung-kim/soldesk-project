package com.example.demo.dto;

import lombok.Data;

@Data
public class StudyBoardDto {
    private int stuId;
    private String stuTitle;
    private String stuContent;
    private int stuHitCnt;
    private String stuCreatedDate;
    private String stuLocal;
    private String stuLang;
}
