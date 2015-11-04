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

# Question 1 #
##############
users["Jonathan"][:twitter]

# Question 2 #
##############
users["Erik"][:favorite_numbers].push(7)

# Question 3 #
##############
users["Ivan"] = { :twitter => "ivanyapeter", :favorite_numbers => [4, 8, 13] }

# Question 4 #
##############
users["Erik"][:favorite_numbers]

# Question 5 #
##############
users["Erik"][:favorite_numbers].min

# Question 6 #
##############
# users["Anil"][:favorite_numbers].each { |favNum| puts favNum if favNum.to_i%2==0 }
users["Anil"][:favorite_numbers].select { |favNum| favNum.even? }

# Question 7 #
##############
common_number = users.map { |key, elem| elem[:favorite_numbers] }
common_number[0] & common_number[1] & common_number[2]


# Question 8 #
##############
# arr = []
# users.each do |key, elem|
#   arr << elem[:favorite_numbers]
# end
# arr.flatten.sort.uniq
fav_numbers_sorted = users.map { |key, elem| elem[:favorite_numbers] }.flatten.sort.uniq