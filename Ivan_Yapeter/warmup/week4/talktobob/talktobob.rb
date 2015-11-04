# require 'pry'
words = "Holla atcha lata"

# Get the Input
puts 'talk to bob'
input = gets.chomp

while input != words
  if input.include? "?"
    puts "Yeah whatever man"
  elsif input.include? "!"
    puts "WOAH, CHILL OUT MAN"
  else
    puts "Cool, bro"
  end
  # Get the input
  puts 'talk to bob'
  input = gets.chomp
end
puts "Laterz bruh"
# binding.pry