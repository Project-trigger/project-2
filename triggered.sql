DROP DATABASE IF EXISTS triggeredDB;
CREATE database triggeredDB;

USE triggeredDB;

CREATE TABLE users (
  position INT NOT NULL,
  username VARCHAR(10) NULL,
  user_image VARCHAR(200) NULL,
  email VARCHAR(100) NULL,
  password_KEY VARCHAR(10) NULL,
  votes INT NULL,
  user_comments INT NULL,
  PRIMARY KEY (position)
);

CREATE TABLE debates (
  position INT NOT NULL,
  incumbent_username VARCHAR(10) NOT NULL,
  challenger_username VARCHAR(10) NULL,
  topic VARCHAR(100) NOT NULL,
  incumbent_body VARCHAR (280) NOT NULL,
  chalenger_body VARCHAR (280) NULL,
  incumbent_votes INT NULL,
  challenger_votes INT NULL,
  /*total_votes INT (incumbent_votes) + (chalenger_votes) NULL*/
  comments VARCHAR (280) NULL,
  PRIMARY KEY (position)
);

/*SELECT * FROM debates;
select * from users;*/
