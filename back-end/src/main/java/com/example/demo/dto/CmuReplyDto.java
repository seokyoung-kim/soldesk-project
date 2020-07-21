package com.example.demo.dto;

import lombok.Data;

@Data
public class CmuReplyDto {
    private int cmrpId;
    private int cmuId;
    private int userId;
    private String cmrpContent;
    private String cmrpCreatedDate;
    private int cmrpPos;
    private int cmrpRef;
    private int cmrpDepth;
}