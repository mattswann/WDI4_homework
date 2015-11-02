###  Maps class to the dishes table
class Dish < ActiveRecord::Base
  belongs_to :dish_type
end
# Dish.where(dish_type_id: 3)
# => return as array

# Dish.count
# => return number of item in Dish