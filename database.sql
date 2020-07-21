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

CREATE TABLE user_list (
	user_id		int(11) 		not null AUTO_INCREMENT comment '회원 번호', 
	user_email	varchar(30) 	not null comment '회원 이메일', 
	user_nick 	varchar(20) 	not null comment '회원 닉네임', 
	user_pass 	varchar(20) 	not null comment '회원 비밀번호',
	user_opt 	smallint(3) 	not null comment '회원 옵션, 0:일반/1:관리자',
	primary key (user_id)    
)

create table cmu_board ( 
	cmu_id 				int(11) 		not null auto_increment comment '커뮤니티 게시판 글 번호', 
	user_id				int(11) 		not null comment '회원 번호, user_list에서 참조', 	
	cmu_title 			varchar(300) 	not null comment '커뮤니티 게시판 제목', 	
	cmu_content 		text 			not null comment '커뮤니티 게시판 내용',  	
	cmu_hitCnt 			smallint(10)  	not null DEFAULT '0' comment '커뮤니티 게시판 조회수', 
	cmu_createdDate 	DATETIME		not null comment '커뮤니티 게시판 작성시간',
	CONSTRAINT cmu_board_pk PRIMARY KEY (cmu_id),
    	CONSTRAINT cmu_board_fk FOREIGN KEY (user_id) REFERENCES user_list(user_id)
)