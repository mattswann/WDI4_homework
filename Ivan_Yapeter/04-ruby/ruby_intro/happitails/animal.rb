class Animal
  attr_reader :name
  def initialize species, name, age, gender
    @species = species
    @name = name
    @age = age
    @gender = gender
  end

  def print_details
    puts "Species: #{@species}"
    puts "   Name: #{@name}"
    puts "    Age: #{@age}"
    puts " Gender: #{@gender}"
  end

  def register_animal species, name, age, gender
    @species = species
    @name = name
    @age = age
    @gender = gender
    $Shelter[:animals] << Animal.new(species, name, age, gender)  
  end

end