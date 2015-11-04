require 'pry'
require 'sinatra'
require 'sinatra/reloader'

#Connect to postgres
require 'pg'

get '/' do
  db = PG.connect(dbname: 'goodfoodhunting')
  @dishes = db.exec('select * from dishes;')
  db.close
  
  erb :index
end

get '/add_new_dish' do
  db = PG.connect(dbname: 'goodfoodhunting')
  @new_dish_name = params[:new_dish_name]
  @new_dish_image = params[:new_dish_image]
  db.exec("INSERT INTO dishes (name, image_url) VALUES ( '#{ params[:new_dish_name] }', '#{ params[:new_dish_image] }');")
  @dishes = db.exec('select * from dishes;')
  db.close

  erb :index
end

#single dish show path
get '/dishes/:id' do
  db = PG.connect(dbname: 'goodfoodhunting')

  # @dishes will get array because .exec returning array
  # :id is from the URL and it will always only be one
  @dishes = db.exec("select * from dishes where id = #{ params[:id] };")

  # => a single array of goodfoodhunting 
  db.close

  # As dishes will always returning one element
  # @dish is the first array of @dishes
  @dish = @dishes[0]

  erb :show
end