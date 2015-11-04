require 'pry'

# Hash - Data Structure
fish = {
  name: 'fishy fish',
  health: 100,
  speed: 5
}

shark = {
  name: 'sharky shark',
  health: 5000,
  speed: 300
}
ocean_world = []
ocean_world << fish << shark

def fish_sleep(fish)
  fish[:health] = 100
end

def shark_sleep(shark)
  shark[:health] = 5000
end

# Factory / Template

class Fish

  attr_reader :name
  # read name
  # > nemo.name
  # => 'fishy fish'
  attr_writer :health
  # write/overwrite health
  # > nemo.health = 500
  # > nemo.health
  # => @health=500
  attr_accessor :name, :health, :speed
  # read and write

  def initialize name, health = 100, speed
    # instance variable
    # it keep the property of Fish
    if name
      @name = name
    else
      @name = 'fishy fish'
    end
    @health = health
    @speed = 300
  end
  # > nemo = Fish.new(nil, 50, 150)
  # => @health=50, @name='fishy fish', @speed=300

  def sleep
    @health = @health + 10
  end

  # Calling name variable element
  # def name
  #   @name
  # end

  # Setting up a variable
  def set_name(new_name)
    @name = new_name
  end

  # Setting up a variable
  # def name=(new_name)
  #   @name = new_name
  # end
  # > nemo.name = 'new name'
  # > nemo.name
  # => new name
end

binding.pry