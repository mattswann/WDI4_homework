##################
##
## Round 1
##################
words = ["hello", "what", "is", "up", "dude"]

def lengths words
  char_length = Array.new()
  for i in 0..words.length-1
    char_length.push words[i].length
  end
  p char_length
end
lengths(words) # => [5, 4, 2, 2, 4]

##################
##
## Alternative Round 1
##################
words = ["hello", "what", "is", "up", "dude"]

def lengths array
  array.map { |word| word.length }
end
p lengths(words)


##################
##
## Round 2
##################
def transmogrifier num1, num2, num3
  return (num1 * num2)**num3
end
transmogrifier 5, 4, 3
transmogrifier 13, 12, 5
transmogrifier 42, 13, 7

##################
##
## Round 3
##################
def toonify accent, sentence
  if accent == 'daffy'
    p sentence.gsub('s', 'th')
  elsif accent == 'elmer'
    p sentence.gsub('r', 'w')
  else
    p sentence
  end
end
toonify 'daffy', 'so you smell like sausage'
#=> "tho you thmell like thauthage"

##################
##
## Round 4
##################
def wordReverse sentence 
  p sentence.split(' ').reverse.join(' ')
end
wordReverse("Now I know what a TV dinner feels like")
# => "like feels dinner TV a what know I Now"

##################
##
## Round 5
##################
def letterReverse sentence
  p sentence.reverse.split(' ').reverse.join(' ')
end
letterReverse("Now I know what a TV dinner feels like")
# => "woN I wonk tahw a VT rennid sleef ekil"
letterReverse("Put Hans back on the line")
# => "tuP snaH kcab no eht enil"

##################
##
## Round 6
##################
def longest array
  p array.sort_by(&:length).last
end
longest(["oh", "good", "grief"])
# => "grief"
longest(["Nothing" , "takes", "the", "taste", "out", "of", "peanut", "butter", "quite", "like", "unrequited", "love"])
# => "unrequited"