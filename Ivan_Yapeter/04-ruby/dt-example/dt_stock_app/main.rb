require 'sinatra'
require 'sinatra/reloader'
require 'yahoofinance'


get '/' do
  erb :index
end

get '/lookup' do

  @last_trade = ''

  if !params[:ticker].nil? && !params[:ticker].empty?
    data = YahooFinance::get_quotes(YahooFinance::StandardQuote, 'MSFT')
    @last_trade = data[params[:ticker]].lastTrade
  end
  # raise 'error msg to see if it reaches here'
  # Inspect let you put the return of data in browser as string
  # data.inspect 
end