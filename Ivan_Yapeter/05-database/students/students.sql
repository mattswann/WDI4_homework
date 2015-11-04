-- Creating table user
CREATE DATABASE ga;
\c ga

CREATE TABLE students
(
  id SERIAL4 PRIMARY KEY,
  firstname VARCHAR(100),
  lastname VARCHAR(100),
  dob DATE,
  gpa FLOAT8
);

INSERT INTO students ( firstname, lastname, dob, gpa) VALUES ('bill', 'jones', '1/1/1990', 3.3);
INSERT INTO students ( firstname, lastname, dob, gpa) VALUES ('jane', 'jones', '1/3/1990', 3.1);
INSERT INTO students ( firstname, lastname, dob, gpa) VALUES ('jim', 'smith', '1/1/1990', 1.2);
INSERT INTO students ( firstname, lastname, dob, gpa) VALUES ('jim', 'perry', '2/5/1990', 4.0);

-- DELETE FROM students where firstname = 'bill';
DELETE FROM student where id = 3;
UPDATE students SET firstname = 'janet' WHERE id = 2;