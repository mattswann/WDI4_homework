class Client
  attr_reader :name
  attr_accessor :pet_list
  def initialize name, number_of_children, age, number_of_pets
    @name = name
    @number_of_children = number_of_children
    @age = age
    @number_of_pets = number_of_pets
    @pet_list = []
  end

  def print_details
    puts "              Name: #{@name}"
    puts "Number of Children: #{@number_of_children}"
    puts "               Age: #{@age}"
    puts "  Number of Pet(s): #{@number_of_pets}"
  end

  def register_client name, number_of_children, age, number_of_pets
    @name = name
    @number_of_children = number_of_children
    @age = age
    @number_of_pets = number_of_pets
    $Shelter[:clients] << Client.new(name, number_of_children, age, number_of_pets)  
  end

  def update_number_of_pets animal_index
    @pet_list << $Shelter[:animals][animal_index]
    $Shelter[:animals].delete_at(animal_index)
    @number_of_pets += @pet_list.length
  end

  def put_adoption client_index, animal_index
    $Shelter[:animals] << $Shelter[:clients][client_index].pet_list[animal_index]
    $Shelter[:clients][client_index].pet_list.delete_at(animal_index)
    @number_of_pets -= 1
  end
end