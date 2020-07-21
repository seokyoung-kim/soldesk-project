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
	PRIMARY KEY (cmu_id),
    FOREIGN KEY (user_id) REFERENCES user_list(user_id)
)

create table stu_reply ( 
	strp_id 			int(11) 		not null	auto_increment comment '스터디 게시판 댓글번호', 
	stu_id 				int(11) 		not null	comment '스터디 게시판 글번호, stu_board 참조', 	
	user_id				int(11) 		not null    comment '회원 번호, user_list 참조', 
	strp_content 		text 			not null    comment '댓글 내용',
	strp_createdDate 	DATETIME  					comment '댓글 작성 시간',
	strp_pos 			smallint(7) unsigned	    comment '댓글 상대위치 저장',	
	strp_ref 			smallint(7) 				comment '댓글이 소속된 부모글 번호',
	strp_depth 			smallint(7) unsigned 	    comment '댓글의 깊이',
	PRIMARY KEY (strp_id),
    FOREIGN KEY (user_id) REFERENCES user_list(user_id),
	FOREIGN KEY (stu_id) REFERENCES stu_board(stu_id)
)

create table cmu_reply ( 
	cmrp_id 			int(11) 		not null	auto_increment comment '커뮤니티 게시판 댓글번호', 
	cmu_id 				int(11) 		not null 	comment '커뮤니티 게시판 글번호, cmu_board 참조',
	user_id				int(11) 		not null    comment '회원 번호, user_list 참조', 
	cmrp_content 		text 			not null  	comment '댓글 내용',  
	cmrp_createdDate	DATETIME 					comment '댓글 작성 시간',				
	cmrp_pos 			smallint(7) 	unsigned, 	
	cmrp_ref 			smallint(7), 
	cmrp_depth 			smallint(7) 	unsigned, 
	PRIMARY KEY (cmrp_id),
    FOREIGN KEY (user_id) REFERENCES user_list(user_id),
	FOREIGN KEY (cmu_id) REFERENCES cmu_board(cmu_id)
)