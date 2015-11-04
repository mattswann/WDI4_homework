require 'pry'
require './building'
require './apartment'
require './person'

p1 = Person.new('Nike', 24, 'Male')
p2 = Person.new('Adidas', 26, 'Female')
a1 = Apartment.new(10000.00, false, 300, 4, 5)
a2 = Apartment.new(20000.00, false, 300, 4, 5)
b1 = Building.new('William st', 'Modern', true, false, 30)

binding.pry