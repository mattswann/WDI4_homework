require 'pry'
require './person.rb'
# Create a database.txt file if exist else append (read-write)
# db = File.new('database.txt', 'a+')
# Close db file
# db.close

File.open('database.txt', 'a+') do |file|
  print "Input person and save to a file (y/n) "
  response = gets.chomp.downcase

  while response == "y"
    print "Enter name, age, gender: "
    response = gets.chomp.downcase
    file.puts(response)

    print "Input person and save to file (y/n) "
    response = gets.chomp.downcase
  end
end

people = []

# Open database.txt on read mode and only have it open until the task done
File.open('database.txt', 'r') do |file|
  file.each do |line|

    # Chomp and split the line and assign it one by one into the variable
    name, age, gender = line.chomp.split(',')
    person = Person.new(name, age, gender)
    
    # Same as above
    # data = line.chomp.split(',')
    # person = Person.new(data[0], data[1], data[2])
    ############################

    people << person
  end
end
binding.pry