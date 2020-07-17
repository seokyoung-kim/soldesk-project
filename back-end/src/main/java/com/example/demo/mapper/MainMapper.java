package com.example.demo.mapper;

import com.example.demo.dto.MainDto;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface MainMapper {
    List<MainDto> mainList();
    MainDto selectMain(int mainId);
    void insertMain(MainDto username);
    void updateMain(MainDto username);
    void deleteMain(int mainId);

}
