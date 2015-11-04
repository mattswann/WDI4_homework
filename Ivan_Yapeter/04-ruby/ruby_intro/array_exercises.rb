# require 'pry'

# days_of_the_week = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday']
# puts 'Array of day in a week'
# puts days_of_the_week


# days_of_the_week.pop
# puts 'Remove Sunday'
# puts days_of_the_week


# days_of_the_week.unshift('sunday')
# puts 'Insert Sunday in the begining of the week'
# puts days_of_the_week

# days_of_the_week = [['monday', 'tuesday', 'wednesday', 'thursday', 'friday'], ['saturday', 'sunday']]
# puts 'Split days_of_the_week array into 2'
# puts days_of_the_week

# days_of_the_week.pop
# puts 'Remove weekend from days_of_the_week Array'
# puts days_of_the_week

# puts 'Sort days_of_the_week'
# days_of_the_week.sort

# binding.pry

# DT's way

# days_of_the_week = 'monday tuesday wednesday thursday friday saturday sunday'.Split(' ')

days_of_the_week = %w{monday tuesday weds thurs fri sat sun}
# temp_day = days_of_the_week.pop
# days_of_the_week.unshift(temp_day)
days_of_the_week.unshift(days_of_the_week.pop)
days_of_the_week = [ ['monday', 'tuesday', 'wednesday', 'thursday', 'friday'], ['saturday', 'sunday'] ]
days_of_the_week.length # days_of_the_week.size days_of_the_week.count

# days_of_the_week.shift
days_of_the_week.delete_at(1)

days_of_the_week.sort # this won't work because the array are nested and currently there is only one element in the parent array that is an array. you can't sort arrays

sorted_days = days_of_the_week.flatten.sort # Flatten doesn't save the flatten

sorted_days = days_of_the_week.flatten! #Save flatten changes to the days_of_the_week

p sorted_days # Programmer print