require 'pry'
require 'pg' # to connect to postgres
require 'sinatra'
require 'sinatra/reloader'

###########################################################
###                     Routes Design
###  Function           Endpoint Path     HTTP Method
###  List dishes        /                 get
###  Show new form      /dish/new         get
###  Show single dish   /dishes/:id       get
###  Create dish        /dishes           post
###  Show edit form     /dishes/:id/edit  get
###  Updating dish      /dishes/:id       put/patch
###  Deleting dish      /dishes/:id       delete

require_relative 'db_config'
require_relative 'models/dish'
require_relative 'models/dish_type'
require_relative 'models/user'

enable :sessions

helpers do

  def link label, href
    "<a href='#{ href }'>#{ label }</a>"
  end

  def current_user
    User.find_by(id: session[:user_id])
  end

  def logged_in?
    # current_user = 'has something'
    # > !current_user
    # => false
    # > !!current_user
    # => true
    !!current_user
  end
end

after do
  ActiveRecord::Base.connection.close
end


###########################################################
###  Initiate the Index page
### 
get '/' do

  # params[:dish_type_id]

  @dish_types = DishType.all


  if params[:dish_type_id].nil? || params[:dish_type_id].empty?
    @dishes = Dish.all
  else
    @dishes = Dish.where(dish_type_id: params[:dish_type_id])
  end

  erb :index
end


###########################################################
###  get form
###  
get '/dishes/new' do
  redirect to '/login' unless logged_in?
  erb :new
end


###########################################################
###  Showing a single dish in a web page
###
get '/dishes/:id' do
  @dish = Dish.find(params[:id])
  # sql = "select * from dishes where id = '#{params[:id]}'"
  # @dishes = run_sql(sql)
  erb :show
end


###########################################################
###  Create a new dish
###  Assign INSERT SQL syntax to sql
###  Call run_sql function and passing sql as parameter
###  redirect to '/'
post '/dishes' do

  # db = PG.connect(dbname: 'goodfoodhunting')
  # sql = "INSERT INTO dishes (name, image_url) VALUES ('#{params[:name]}', '#{params[:image_url]}');"
  # run_sql(sql)
  dish = Dish.new(name: params[:name], image_url: params[:image_url])
  dish.save

  redirect to '/'

end


###########################################################
###  Showing an edit page for the defined ID
###
get '/dishes/:id/edit' do
  # @dishes = run_sql("select * from dishes where id = #{ params[:id] };")
  # @dish = @dishes[0]
  redirect to "/dishes/#{params[:id]}" unless logged_in?
  @dish = Dish.find(params[:id])
  @dish_types = DishType.all
  erb :edit
end


###########################################################
###  Called the function to do update
###  Redirect to the id of updated dish
put '/dishes/:id' do
  # sql = "UPDATE dishes SET name = '#{params[:name]}', image_url = '#{params[:image_url]}', dish_type_id = #{params[:dish_type_id]} WHERE id = #{ params[:id] };"
  # run_sql(sql)

  @dish = Dish.find_by(id: params[:id])
  @dish.update(id: params[:id], name: params[:name], dish_type_id: params[:dish_type_id])
  @dish.save

  #redirect by default going to get method
  redirect to "/dishes/#{params[:id]}"
end


###########################################################
###  Delete
###  
###  post '/dishes/:id/delete' do
delete '/dishes/:id' do
  # sql = "DELETE FROM dishes WHERE id = #{params[:id]};"
  # run_sql(sql)

  @dish = Dish.find_by(id: params[:id])
  @dish.destroy

  redirect to "/"
end


###########################################################
###  Showing dish type list page
###  
get '/dish_types' do
  @dish_types = DishType.all
  erb :dish_type
end


###########################################################
###  Showing an edit page for the defined Dish Type
###
get '/dish_types/:id/edit' do

  redirect to '/dish_types' unless logged_in?
  @dish_types = DishType.find(params[:id])
  erb :dish_type_edit
end


###########################################################
###  Called the function to do update
###  Redirect to the list of dish type
put '/dish_types/:id' do
  @dish_types = DishType.find(params[:id])
  @dish_types.update(name: params[:name])
  @dish_types.save

  redirect to "/dish_types"
end


###########################################################
###  Authentication
###

# show login form
get '/login' do
  erb :login
end


# creating a session
post '/session' do

  user = User.find_by(email: params[:email])
  if user && user.authenticate(params[:password])
    #create session
    session[:user_id] = user.id
    #redirect user
    redirect to '/'
  else
    #redirect user
    redirect to '/login'
  end
end

delete '/session' do
  session[:user_id] = nil
  redirect to '/login'
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
