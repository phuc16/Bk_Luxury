create database if not exists db;
use db;

create table if not exists ACCOUNT(
	id				int				auto_increment,
    firstName		char(20)		not null,
    lastName		char(20)		not null,
    email			char(50)		not null,
    password		char(20)		not null,
    dob				date			not null,
    phone			char(10)		not null,
    country			char(20)		not null,
    primary key(id)
);

create table if not exists ROOM(
	number			int				auto_increment,
    desciption		varchar(100)	not null,
    picture			varchar(100)	not null,
    capacity		int				not null,
    square			float(10)		not null,
    price			float(10)		not null,
    type			char(20)		not null,
    status			bool			default 0,
    primary key(number)
);

create table if not exists SERVICE(
	roomNumber		int				not null,
    service			char(50)		not null
    primary key (roomNumber, service)
);	

create table if not exists BOOKING(
    id              int             not null,
	accountId		int				not null,
    roomNumber		int				not null,
    checkIn			date			not null,
    checkOut		date			not null,
    primary key(id)
);

alter table SERVICE add FOREIGN KEY (roomNumber) REFERENCES ROOM(number);

alter table BOOKING
    add FOREIGN KEY (accountId) 
				REFERENCES ACCOUNT(id)
			ON DELETE CASCADE
            ON UPDATE CASCADE,
    add FOREIGN KEY (roomNumber) 
				REFERENCES ROOM(number)
			ON DELETE CASCADE
            ON UPDATE CASCADE
;
INSERT INTO `db`.`room` (`number`, `desciption`, `picture`, `capacity`, `square`, `price`, `type`, `status`) VALUES ('2', '1212', '12312', '12312', '12', '1', '212', '0');
INSERT INTO SERVICE 
	SET roomNumber = (SELECT number FROM ROOM WHERE number = 2),
		service = '123';
INSERT INTO SERVICE 
	SET roomNumber = (SELECT number FROM ROOM WHERE number = 2),
		service ='456';
INSERT INTO SERVICE 
	SET roomNumber = (SELECT number FROM ROOM WHERE number = 2),
		service = '789';
