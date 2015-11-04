require 'sinatra'
require 'sinatra/reloader'
require 'yahoofinance'
# require 'pry'

get "/" do
  erb :index
end

get "/stocks" do

  if !params[:ticker].nil? && !params[:ticker].empty?
    # check invalid input
    @ticker = params[:ticker]
    redirect to "/stocks/#{@ticker}"
  else
    redirect to "/not-found"
  end

end

get "/stocks/:ticker" do
    @ticker = params[:ticker]
    @ticker_hash = YahooFinance::get_quotes(YahooFinance::StandardQuote, "#{@ticker}")["#{@ticker}"]

    @symbol = @ticker_hash.symbol
    @name = @ticker_hash.name
    @last_trade_price = @ticker_hash.lastTrade
    @change = @ticker_hash.change
    @change_points = @change.split(' ')[0]
    @change_percent = @change.split(' ')[2]
    @last_trade_time = @ticker_hash.time
    @date = @ticker_hash.date
    @open_price = @ticker_hash.open
    @day_low = @ticker_hash.dayLow
    @day_high = @ticker_hash.dayHigh
    @volume = @ticker_hash.volume
    @average_daily_volume = @ticker_hash.averageDailyVolume
    @previous_close_price = @ticker_hash.previousClose

    @ask = @ticker_hash.ask

    # Run the show.erb
    erb :show
end

get "/not-found" do
  erb :"not-found"
end