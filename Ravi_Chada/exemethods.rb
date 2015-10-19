require 'pry'

# 1
words = ["hello", "what", "is", "up", "dude"]
def lengths words
  lengtharray = []
  words.each do |singleword|
    singleword_arraylength = singleword.split('').length
    lengtharray.push singleword_arraylength
  end
  lengtharray
end


#2
def transmogrifier num1,num2,num3
  (num1*num2)**num3
end


#3
sentence = "so you smell like sausage"
accent = " "
def toonify accent,sentence
  if accent == "daffy"
    sentence.gsub!('s','th')
    sentence
  elsif accent == "elemer"
    sentence.gsub!('r','w')
    sentence
  else
    sentence
  end
end
# one more way => sentence.tr('s','th')

#4
sentence = 'Now I know what a TV dinner feels like'
def wordReverse sentence
  sentence = sentence.split(' ').reverse.join(' ')
  sentence
end

#5
sentence = "Put Hans back on the line"
def letterReverse sentence
  newarray = ""
  words = sentence.split('')
  words.each do
   reversewords = words.reverse
  newarray = reversewords.join('').to_s
  end
  newarray = newarray.split(' ').reverse.join(' ')
  newarray
end

#6
words = ["Nothing" , "takes", "the", "taste", "out", "of", "peanut", "butter", "quite", "like", "unrequited", "love"]
def longest words
  words.max
end
############
# words = ["Nothing" , "takes", "the", "taste", "out", "of", "peanut", "butter", "quite", "like", "unrequited", "love"]
# def longest words
#   length_word= ""
#   words.each do |iterateeword|
#     longest_word = iterateeword unless iterateeword.length < longest_word
#   end
#   longest_word
# end
############




=begin
lengtharray =[]
  lengtharray.map {|singleword_arraylength|
  lengtharray.push singleword_arraylength}
  puts lengtharray
end
=end


binding.pry
