/*HERE IS WHERE YOUR SQL SCRIPTS WILL BE PLACED*/
DROP DATABASE IF EXISTS triggeredDB;
CREATE database triggeredDB;

USE triggeredDB;

CREATE TABLE users (
  id INT NOT NULL AUTO_INCREMENT,
  username VARCHAR(10) NULL,
  email VARCHAR(100) NULL,
  password_KEY VARCHAR(10) NULL,
  PRIMARY KEY (id)
);

CREATE TABLE debates (
  id INT NOT NULL AUTO_INCREMENT,
  incumbent_username VARCHAR(10) NOT NULL,
  challenger_username VARCHAR(10) NULL,
  topic VARCHAR(100) NOT NULL,
  incumbent_body VARCHAR (280) NOT NULL,
  challenger_body VARCHAR (280) NULL,
  incumbent_votes INT NULL,
  challenger_votes INT NULL,
  voter_usernames VARCHAR (10) NULL,
  comments VARCHAR (280) NULL,
  created_at DATETIME NOT NULL,
  PRIMARY KEY (id)
);

INSERT INTO users (username, email, password_KEY)
VALUES ("Cranekick50", "michael.srithapin@gmail.com", "123");

INSERT INTO users (username, email, password_KEY)
VALUES ("Vader911", "empire@yahoo.com", "123");

INSERT INTO users (username, email, password_KEY)
VALUES ("Batman", "batcave@gmail.com", "123");

INSERT INTO debates (incumbent_username, topic, incumbent_body,challender_body, created_at)
VALUES ("Cranekick50", "who is the better superhero???", "batman has lots of gadgets", "superman has super powers", "2020-01-01 12:00:00");

INSERT INTO debates (incumbent_username, topic, incumbent_body, challender_body, created_at)
VALUES ("Batman", "Which gadget should I use?", "batrang?", "grappling hook?", "2020-01-02 14:00:00");

INSERT INTO debates (incumbent_username, topic, incumbent_body, challender_body, created_at)
VALUES ("Vader911", "who should I put in carbonite first?", "Luke Skywalker", "Han Solo", "2020-01-03 15:00:00");