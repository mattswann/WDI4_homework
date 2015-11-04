class Building 
  attr_accessor :address, :style, :has_doorman, :is_walkup, :num_floors, :apartments

  # Constructor Method
  def initialize address, style, has_doorman, is_walkup, num_floors
    @address = address
    @style = style
    @has_doorman = has_doorman
    @is_walkup = is_walkup
    @num_floors = num_floors
    @apartments = []
  end

  def to_s
    puts "Building is at #{address}, its a #{style} designed building. #{has_doorman}, #{is_walkup}, has #{num_floors} floor, #{apartments}."
  end

  def set_apartments= new_apartment
    @apartments << new_apartment 
  end
end