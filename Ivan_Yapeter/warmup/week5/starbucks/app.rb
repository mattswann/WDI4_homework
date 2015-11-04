require 'pry'

class Coffee

  def initialize drink, sugar, size, name
    @drink = drink
    @sugar = sugar
    @size = size
    @name = name
  end

  def to_s
    "#{@name}'s #{@drink}, #{@size}, #{@sugar}."
  end

end

binding.pry