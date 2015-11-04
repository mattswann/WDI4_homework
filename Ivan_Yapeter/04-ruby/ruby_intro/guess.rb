# guess my age
require 'pry'
age = 62

# guessed = false
# while (!guessed)
#   print "Guess my age? "
#   userInput = gets
#   userInput = userInput.chomp # Remove the \n NewLine
#   if (userInput.to_i) == age
#     puts "wow how did you know"
#     guessed = true
#     break;
#   end
#   puts "guess better"
# end

################
## Another Way
################

# Get the Input
puts 'make a guess'
input = gets.chomp.to_i

while input != age
  # Get the input
  puts 'make a guess'
  input = gets.chomp.to_i
end

puts "wow how did you know"

################
## Another Way
################
# begin
#   #get the input
#   puts 'make a guess'
#   input = get.chomp.to_i
# end while input != age

binding.pry

################
## Another Way
################
# while !bank_account.empty?
#   puts 'party on'
# end

# until bank_account.empty?
#   puts 'party on'
# end