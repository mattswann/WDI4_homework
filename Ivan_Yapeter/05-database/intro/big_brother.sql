-- Creating table user
CREATE TABLE users
(
  -- Key: id, Value-name: SERIAL4
  id SERIAL4 PRIMARY KEY,
  -- Key: name, Value-format: variable character max 100 char
  name VARCHAR(100),
  age INTEGER,
  gender VARCHAR(10)
);

INSERT INTO users (name, age, gender) VALUES('sam',12,'m');
INSERT INTO users (name, age, gender) VALUES('jack',13,'m');
INSERT INTO users (name, age, gender) VALUES('mary',22,'f');
INSERT INTO users (name, age, gender) VALUES('jane',32,'f');