require 'active_record'


###########################################################
###  Connecting Dish to database
###  
options = {
  adapter: 'postgresql',
  database: 'goodfoodhunting'
}

ActiveRecord::Base.establish_connection(options)