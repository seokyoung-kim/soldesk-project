package com.example.demo.dto;

import lombok.Data;

@Data
public class CmuBoardDto {
    private int cmuId;
    private int userId;
    private String cmuTitle;
    private String cmuContent;
    private int cmuHitCnt;
    private String cmuCreatedDate;
}