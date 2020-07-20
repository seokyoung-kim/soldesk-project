CREATE TABLE stu_board (
	stu_id int(11) not null AUTO_INCREMENT comment '스터디 게시판 글 번호',
	stu_title varchar(300) not null comment '스터디 게시판 제목',
	stu_content text not null comment '스터디 게시판 내용',
	stu_hitCnt SMALLINT(10) not null DEFAULT '0' comment '스터디 게시판 조회수',
	stu_createdDate DATETIME not null comment '스터디 게시판 작성시간',
	stu_local varchar(10) not null comment '스터디 게시판 지역',
    stu_lang varchar(10) not null comment '스터디 게시판 언어',
    primary key (stu_id)
)