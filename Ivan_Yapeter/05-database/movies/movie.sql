CREATE DATABASE moviedb;

CREATE TABLE movies
(
  id SERIAL4 PRIMARY KEY,
  title VARCHAR(100) NOT NULL,
  year VARCHAR(4),
  rated VARCHAR(2),
  released VARCHAR(15),
  runtime VARCHAR(500),
  genre VARCHAR(500),
  director VARCHAR(500),
  writer VARCHAR(500),
  actors VARCHAR(500),
  plot VARCHAR(500),
  language VARCHAR(50),
  country VARCHAR(50),
  awards VARCHAR(500),
  poster VARCHAR(500),
  metascore VARCHAR(3),
  imdb_rating VARCHAR(3),
  imdb_votes VARCHAR(100),
  imdb_id VARCHAR(50)
);

INSERT INTO movies (title, year, rated, released, runtime, genre, director, writer, actors, plot, language, country, awards, poster, metascore, imdb_rating, imdb_votes, imdb_id) VALUES ('Jaws', '1975', 'PG', '20 Jun 1975', '124 min', 'Adventure, Drama, Thriller','Steven Spielberg', 'Peter Benchley (screenplay), Carl Gottlieb (screenplay), Peter Benchley (based on the novel by)', 'Roy Scheider, Robert Shaw, Richard Dreyfuss, Lorraine Gary', 'When a gigantic great white shark begins to menace the small island community of Amity, a police chief, a marine scientist and grizzled fisherman set out to stop it.', 'English', 'USA', 'Won 3 Oscars. Another 10 wins & 14 nominations.', 'http://ia.media-imdb.com/images/M/MV5BNDcxODkyMjY4MF5BMl5BanBnXkFtZTgwOTk5NTc5MDE@._V1_SX300.jpg', '79', '8.1', '372,851', 'tt0073195' );