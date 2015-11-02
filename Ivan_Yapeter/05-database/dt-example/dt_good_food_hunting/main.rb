require 'pry'
require 'sinatra'
require 'sinatra/reloader'
require 'pg' # to connect to postgres

###########################################################
###  Function           Routes Design     CRUD
###  List dishes        /                 get
###  Show new form      /dish/new         get
###  Show single dish   /dishes/:id       get
###  Create dish        /dishes           post
###  Show edit form     /dishes/id/edit   get
###  Updating dish      /dishes/:id       put/patch
###  Deleting dish      /dishes/:id       delete

class Dish
  attr_accessor :id, :name, :image_url, :dish_type_id

  def initialize id, name, image_url, dish_type_id
    @id = id
    @name = name
    @image_url = image_url
    @dish_type_id = dish_type_id
  end

end



###########################################################
###  Telling the program to run @dish_types before anything else
### 
before do
  @dish_types = run_sql('select * from dish_types;')
end


###########################################################
###  Initiate the Index page
### 
get '/' do
  rows = run_sql('select * from dishes;')
  @dishes = []
  rows.each do |row|
    new_dish = Dish.new(row['id'], row['name'], row['image_url'], row['dish_type_id'])
    @dishes << new_dish
  end

  erb :index
end


###########################################################
###  get form
###  
get '/dishes/new' do
  erb :new
end


###########################################################
###  Showing a single dish in a web page
###
get '/dishes/:id' do
  @dishes = run_sql("select * from dishes where id = #{ params[:id] };") # [{}]
  @dish = @dishes[0] # {}
  erb :show
end


###########################################################
###  Create a new dish
###  Assign INSERT SQL syntax to sql
###  Call run_sql function and passing sql as parameter
###  redirect to '/'
post '/dishes' do

  # db = PG.connect(dbname: 'goodfoodhunting')
  sql = "INSERT INTO dishes (name, image_url) VALUES ('#{params[:name]}', '#{params[:image_url]}');"
  run_sql(sql)

  redirect to '/'

end


###########################################################
###  Showing an edit page for the defined ID
###
get '/dishes/:id/edit' do
  @dishes = run_sql("select * from dishes where id = #{ params[:id] };")
  @dish = @dishes[0]
  erb :edit
end


###########################################################
###  Called the function to do update
###  Redirect to the id of updated dish
put '/dishes/:id' do
  sql = "UPDATE dishes SET name = '#{params[:name]}', image_url = '#{params[:image_url]}', dish_type_id = #{params[:dish_type_id]} WHERE id = #{ params[:id] };"
  run_sql(sql)

  redirect to "/dishes/#{params[:id]}"
end


###########################################################
###  Delete
###  
###  post '/dishes/:id/delete' do
delete '/dishes/:id' do
  sql = "DELETE FROM dishes WHERE id = #{params[:id]};"
  run_sql(sql)

  redirect to "/"
end


###########################################################
###  Method to connect to goodfoodhunting database
###  Execute the SQL syntax passed in through argument
###  Close database connection
###  Call the exec
def run_sql sql
  db = PG.connect(dbname: 'goodfoodhunting')
  results = db.exec(sql)
  db.close
  results
end
