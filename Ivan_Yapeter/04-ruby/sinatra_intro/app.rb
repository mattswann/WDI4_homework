require 'sinatra'
require 'sinatra/reloader'

get '/hello/:thing' do
  # Params pass parameter after URL address
  # >  <Domain>/hello/wdi4
  # => Hello wdi4
  "<h1>Hello #{params[:thing]}</h1>"
end

get '/about' do
  # Calling a symbol about.erb
  # Sinatra by default will search for the file in views folders
  erb :about
end

get '/contact' do
  erb :contact
end

get '/multifly/:num1/:num2' do
  result = params[:num1].to_i * params[:num2].to_i
  "multifly #{result}"
end

# get '/:about' do
#   "#{about.html}"
# end