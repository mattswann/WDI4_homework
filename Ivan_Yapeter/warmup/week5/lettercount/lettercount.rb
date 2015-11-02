require 'pry'

def letter_count word

  counter = {}
  lettters = word.downcase.split('')

  lettters.each do |letter|
    count = lettters.count(letter)
    counter[letter] = count
  end

  return counter

end

letter_count("moon")

binding.pry