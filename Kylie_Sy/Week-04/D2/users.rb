users = {
  "Jonathan" => {
    :twitter => "tronathan",
    :favorite_numbers => [12, 42, 75],
  },
  "Erik" => {
    :twitter => "sferik",
    :favorite_numbers => [8, 12, 24],
  },
  "Anil" => {
    :twitter => "bridgpal",
    :favorite_numbers => [12, 14, 85],
  },
}

# 1. How would you access Jonathan's Twitter handle (i.e. the string "tronathan")?
 users['Jonathan'][:twitter]

# 2. How would you add the number 7 to Erik's favorite numbers?
users['Erik'][:favorite_numbers].map do |elem|
  elem+7
end

# 3. How would you add yourself to the users hash?
users['Kylie'] = {}

# 4. How would you return the array of Erik's favorite numbers?
users['Erik'][:favorite_numbers]

# 5. How would you return the smallest of Erik's favorite numbers?
users['Erik'][:favorite_numbers].min

# 6. How would you return an array of Anil's favorite numbers that are also even?
anil_even = []
users['Anil'][:favorite_numbers].each do |elem|
  # if elem % 2 == 0
  if elem.even?
    anil_even << elem
  end
end

# 7. How would you return an array of the favorite numbers common to all users?
# solution 1, too much unnecessary stuff
# users_keys = users.keys
# same_fave_nums = []
# users_keys.each do |elem| # don't really need to use ...do...end in 1 line codes
#    same_fave_nums << users[elem][:favorite_numbers]
# end
# same_fave_nums = same_fave_nums.flatten
# same_fave_nums.detect do |num|
#   same_fave_nums.count(num) > 1
# end

# solution 2
same_fave_nums = users.map {|key, value| value[:favorite_numbers]}
same_fave_nums[0] & same_fave_nums[1] & same_fave_nums[2] #intersection

# 8. How would you return an array containing all users' favorite numbers, sorted, and excluding duplicates?
same_fave_nums = users.map {|key, value| value[:favorite_numbers]}
same_fave_nums_sorted = same_fave_nums.flatten.uniq.sort