CREATE DATABASE goodfoodhunting;

CREATE TABLE dishes
(
  id SERIAL4 PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  image_url VARCHAR(100)
);

INSERT INTO dishes (name, image_url) VALUES ('Strawberry Watermelon Cake with Rose Cream', 'http://s3.amazonaws.com/foodspotting-ec2/reviews/2795621/thumb_600.JPG?1354196605?1445855301');
INSERT INTO dishes (name, image_url) VALUES ('Baked Eggs', 'http://s3.amazonaws.com/foodspotting-ec2/reviews/2192929/thumb_600.jpg?1344464059?1445855095');
INSERT INTO dishes (name, image_url) VALUES ('Oink Bun', 'http://s3.amazonaws.com/foodspotting-ec2/reviews/105187/thumb_600.JPG?1282833234?1445855337');