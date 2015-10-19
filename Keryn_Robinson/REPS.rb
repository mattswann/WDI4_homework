# 1
# function that returns the length (number of letters) of an array of words as numbers
words = ["hello", "what", "is", "up", "dude"]

def lengths(words)
  words.each do |word|
  puts word.length
  end
end

# 2
# function that takes in 3 numbers and returns 1st x 2nd then result x 3rd number

def transmogrifier(num1, num2, num3)
  (num1 * num2) * num3
end


# 3

accent = ['daffy', 'elmer']

sentence = ""

def toonify(accent, sentence)
  change sentence # ? e.g. Daffy -- replace s with 'th', elmer -- replace 'r' with 'w'

end


# 4
# Write a function wordReverse that accepts a single argument, a string. 
# The method should return a string with the order of the words reversed.

string = ["Now I know what a TV dinner feels like"]

# def word_reverse(string)
  # already an array in ruby
  "string".reverse 
# produces "ekil sleef rennid VT a tahw wonk I woN"


#5
# Write a function letterReverse that accepts a single argument, a string. 
# The function should maintain the order of words in the string but reverse the letters in each word.

# def letter_reverse(string)
  "string".reverse_each
# end


#6
# Write a function longest that accepts a single argument, an array of strings. 
# The method should return the longest word in the array. In case of a tie, the method should return either.

# use No. 1 then return longest word (length)


