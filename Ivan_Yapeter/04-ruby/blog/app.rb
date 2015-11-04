require "pry"
require "sinatra"
require "sinatra/reloader"

get "/" do
  erb :"home-page"
end

get "/about" do
  erb :about
end

get "/blog" do
  erb :"blog-page"
end

get "/blog/:name" do
  posts = {
    "Shoes" => "this is Shoes", # blog title
    "Bag" => "this is Bag"
  }
  @post_name = params[:name]
  @post_content = posts[@post_name]
  erb :"blog-post"
end

get "/contact" do
  erc :contact
end

get "/form_processor" do 
  "your question is : #{params[:question]}"

  # To see all parameters
  # params.inspect
end