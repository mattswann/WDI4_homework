require 'pry'

#Round 1
words = ["hello", "what", "is", "up", "dude"]
def lengths arr
  newArr = []
  arr.map do
    |i|
    newArr.push i.length
  end
  puts newArr
end

lengths(words)

#Round 2

def transmogrifier a, b, c
  valOne = a * b
  puts valOne ** c
end

transmogrifier(5, 3, 2)
transmogrifier(5, 4, 3)
transmogrifier(13, 12, 5)
transmogrifier(42, 13, 7)

#Round 3
def toonify(accent, sentence)
  if accent == 'daffy'
    sentence.gsub("s", "th")
  elsif accent == 'elmer'
    sentence.gsub("r", "w")
  else
    sentence
  end
end

puts toonify("daffy", "so you smell like sausage")



# Round 4
def wordReverse(str)
  puts str.split.reverse.join(' ')
end
wordReverse("Now I know what a TV dinner feels like")




# Round 5
def letterReverse(str)
  new_array = []
  str = str.split ' '
  for word in str
    new_array.push(word.reverse)
  end
  new_array.join(' ')
end

puts letterReverse("Now I know what a TV dinner feels like")


# Round 6
def longest(word)
  puts word.max_by(&:length)
end

longest(["oh", "good", "grief"])
longest(["Nothing" , "takes", "the", "taste", "out", "of", "peanut", "butter", "quite", "like", "unrequited", "love"])


binding.pry
