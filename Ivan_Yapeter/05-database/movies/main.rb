require 'pry'   
require 'sinatra'
require 'sinatra/reloader'
require 'httparty'


require_relative 'db_config'
require_relative 'models/movie'

after do
  ActiveRecord::Base.connection.close
end

not_found do
  status 404
  erb :oops
end

get '/' do
  erb :index
end

get '/search' do
  # search_result.erb

  if !params[:title].nil? && !params[:title].empty?
    # check invalid input
    @title = params[:title].gsub('-', ' ')
    @result = HTTParty.get("http://www.omdbapi.com/?s=#{@title}")["Search"]
    if @result.length == 1
      redirect to "/movie/#{@title}/#{imdbid}"
    elsif @result.length > 1
      erb :search_result
    end

  else
    erb :index
    # no result
  end


end

get "/movie/:title/:imdbid" do
  title = params[:title]
  imdbid = params[:imdbid]
  # Getting movie by ID
  @movie_details = Movie.find_by(imdb_id: imdbid)
  result = HTTParty.get("http://www.omdbapi.com/?i=#{imdbid}")

  # if the title searched is in the db, retrive data from db or oMDB by ID
  if @movie_details
    @title = @movie_details.title
    @year = @movie_details.year
    @rated = @movie_details.rated
    @released = @movie_details.released
    @runtime = @movie_details.runtime
    @genre = @movie_details.genre
    @director = @movie_details.director
    @writer = @movie_details.writer
    @actors = @movie_details.actors
    @plot = @movie_details.plot
    @language = @movie_details.language
    @country = @movie_details.country
    @awards = @movie_details.awards
    @poster = @movie_details.poster
    @metascore = @movie_details.metascore
    @imdb_rating = @movie_details.imdb_rating
    @imdb_votes = @movie_details.imdb_votes
    @imdb_id = @movie_details.imdb_id

    erb :movie_details
  elsif result["Response"] == "True"
    @title = result["Title"]
    @year = result["Year"]
    @rated = result["Rated"]
    @released = result["Released"]
    @runtime = result["Runtime"]
    @genre = result["Genre"]
    @director = result["Director"]
    @writer = result["Writer"]
    @actors = result["Actors"]
    @plot = result["Plot"]
    @language = result["Language"]
    @country = result["Country"]
    @awards = result["Awards"]
    @poster = result["Poster"]
    @metascore = result["Metascore"]
    @imdb_rating = result["imdbRating"]
    @imdb_votes = result["imdbVotes"]
    @imdb_id = result["imdbID"]

    Movie.create(
      title: @title,
      year: @year,
      rated: @rated,
      released: @released,
      runtime: @runtime,
      genre: @genre,
      director: @director,
      writer: @writer,
      actors: @actor,
      plot: @plot,
      language: @language,
      country: @country,
      awards: @awards,
      poster: @poster,
      metascore: @metascore,
      imdb_rating: @imdb_rating,
      imdb_votes: @imdb_votes,
      imdb_id: @imdb_id
    )
    erb :movie_details
  else
    erb :index
    # no result
  end

end

# tmrw
# create the database for movie
# create a table with all entities
# ASK DT what if an entity has more than 1 value to a table (genre): join table
# create models dir
# create movie.rb
# create db_config
# include movie.rb in main.rb
# create post to save movie details, only movie that has been selected
  # dish = Dish.new(name: params[:name], image_url: params[:image_url])
  # dish.save
# make a new conditional in /movie...
# if the title searched is in the db, retrive data from db
# ASK DT how to check where the data are retrived from
# do css
