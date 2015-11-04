require 'active_record'


###########################################################
###  Connecting Dish to database
###  
options = {
  adapter: 'postgresql',
  database: 'moviedb'
}

ActiveRecord::Base.establish_connection(options)