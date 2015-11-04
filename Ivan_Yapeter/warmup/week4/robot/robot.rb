require 'pry'

class Robot

  # attr_reader :name

  def initialize
    @counter = 0
    @name = generate_name 
    @mac_address = generate_mac_address
  end

  def generate_name 
    charset = Array.new(2) { Array('A'..'Z').sample }.join
    # charset = ('AA'..'ZZ').to_a.sample
    numset = rand 100..500
    @name = charset + numset.to_s
  end

  def generate_mac_number
    number = Array('0'..'9').sample(10).join
    char = Array('a'..'f').sample(2).join
    @mac_address = number + char
  end

  def reset
    @name = generate_name
  end

  def name
    @counter += 1
    @name
  end

  def instruction_count
    puts @counter
  end

  puts "Robot 1: "
  robot1 = Robot.new
  puts robot1.name
  puts robot1.name
  puts robot1.name

  puts "Robot 2: "
  robot2 = Robot.new
  puts robot2.name
  puts robot2.name
  puts robot2.name

end

binding.pry