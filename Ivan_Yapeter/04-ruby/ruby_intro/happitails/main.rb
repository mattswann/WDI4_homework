require 'pry'
require './animal.rb'
require './client.rb'

$Shelter = {
  animals: [],
  clients: []
}

animal1 = Animal.new('Cow', 'Kikin', 5, 'Female', )
animal2 = Animal.new('Octopus', 'Tristan', 5, 'Male')
animal3 = Animal.new('Monkey', 'Chad', 5, 'Unknown')

client1 = Client.new('Frank', 2, 40, 0)
client2 = Client.new('Gabriel', 0, 20, 1)
client3 = Client.new('Zhu', 1, 30, 2)

$Shelter[:animals] = [animal1, animal2, animal3]
$Shelter[:clients] = [client1, client2, client3]

begin
  puts 'Welcome to Happitails'
  puts ''
  puts '1) List of Animals'
  puts '2) List of Clients'
  puts '3) Register new animal'
  puts '4) Register new client'
  puts '5) Adopt an animal'
  puts '6) Put an adoption'
  puts ''
  puts 'q) Quit'
  input = gets.chomp
  puts '--------------------------------'
  if input == '1'
    puts 'List of animals in our shelter'
    $Shelter[:animals].each do |animal|
      animal.print_details
    end
    puts '--------------------------------'
  elsif input == '2'
    puts 'List of clients in our shelter'
    $Shelter[:clients].each do |client|
      client.print_details
    end
    puts '--------------------------------'
  elsif input == '3'
    puts 'All information required are mandatory'
    puts 'Please tell us the species of animal you registering'
    species = gets.chomp
    puts 'And its name?'
    animal_name = gets.chomp
    puts 'How old is it?'
    animal_age = gets.chomp
    puts 'Gender?'
    gender = gets.chomp
    puts 'Awesome, let me process the registration'
    $Shelter[:animals] << Animal.new(species, animal_name, animal_age, gender)  
    # $Shelter[:animals].last.register_animal(species, animal_name, animal_age, gender)
    puts 'Animal registration completed'
  elsif input == '4'
    puts 'All information required are mandatory'
    puts 'Client name:'
    client_name = gets.chomp
    puts 'Number of children:'
    number_of_children = gets.chomp
    puts 'Age:'
    client_age = gets.chomp
    puts 'Number of pets:'
    number_of_pets = gets.chomp
    puts 'Awesome, let me process the registration'
    $Shelter[:clients] << Client.new(client_name, number_of_children, client_age, number_of_pets) 
    # $Shelter[:clients].last.register_client(client_name, number_of_children, client_age, number_of_pets)
  elsif input == '5'
    puts 'Animal name to be adopted?'
    animal_name = gets.chomp
    puts 'Which client would you like to adopt a pet?'
    client_name = gets.chomp
    animal_index = $Shelter[:animals].index { |i| i.name == animal_name }
    # Get index no after comparing client's name returning true
    client_index = $Shelter[:clients].index { |i| i.name == client_name }

    $Shelter[:clients][client_index].update_number_of_pets(animal_index)
    puts 'Congratulation! You have a new pet!'
  elsif input == '6'
    puts 'Which client?'
    client_name = gets.chomp
    puts 'Pet name?'
    animal_name = gets.chomp

    # Get index no after comparing client's name returning true
    client_index = $Shelter[:clients].index { |i| i.name == client_name }
    animal_index = $Shelter[:clients][client_index].pet_list.index { |i| i.name == animal_name }
    
    $Shelter[:clients][client_index].put_adoption(client_index, animal_index)
  end
      
end while input != 'q'

binding.pry