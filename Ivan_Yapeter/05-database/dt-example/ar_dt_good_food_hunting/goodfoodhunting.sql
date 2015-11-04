CREATE DATABASE goodfoodhunting;

CREATE TABLE dishes
(
  id SERIAL4 PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  dish_type_id VARCHAR(100),
  image_url VARCHAR(500) 
);

CREATE TABLE dish_types
(
  id SERIAL4 PRIMARY KEY,
  name VARCHAR(100) NOT NULL
);

CREATE TABLE users 
(
  id SERIAL4 PRIMARY KEY,
  email VARCHAR(200),
  password_digest VARCHAR(200)
);

INSERT INTO dishes (name, image_url, dish_type_id) VALUES ('Grilled lady','http://s3.amazonaws.com/foodspotting-ec2/reviews/5622826/thumb_275.jpg?1445753652', 2);

INSERT INTO dishes (name, image_url, dish_type_id) VALUES ('dumplings','http://s3.amazonaws.com/foodspotting-ec2/reviews/1270161/thumb_275.jpg?1327975061', 3);

INSERT INTO dish_types (name) VALUES ('Dessert');
INSERT INTO dish_types (name) VALUES ('Brunch');
INSERT INTO dish_types (name) VALUES ('Supper');

ALTER TABLE dishes ADD dish_type_id INTEGER;