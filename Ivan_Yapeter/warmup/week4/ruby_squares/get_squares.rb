def get_squares array_of_numbers
  array_of_numbers.select { |num| ( Math.sqrt(num) % 1 == 0 ) }.sort.uniq
end
get_squares([4, 1, 16, 1, 10, 35, 22])
# => [1, 4, 16]