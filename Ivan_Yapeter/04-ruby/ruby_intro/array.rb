numbers = [1,2,3,4]

numbers.push 5

numbers << 6 # append / shovel

numbers.pop

numbers.first
# -> 1

numbers.last
# -> 4

numbers.sort

numbers.reverse

numbers.sort.reverse

numbers.each do |number|
  puts "i am number " + number.to_s # Convert number to string
end

numbers.each do |number|
  puts "i am number #{ number }"
end

