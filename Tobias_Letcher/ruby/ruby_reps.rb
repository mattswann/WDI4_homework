# Round 1
words = ["hello", "what", "is", "up", "dude"]
def lengths(word_lists) 
  word_lengths = []
  word_lists.each {|x| word_lengths << x.length.to_i}
  return word_lengths
end 

lengths(words)

#Round 2

def transmogrifier(a, b, c) 
  total_value = (a * b) ** c
end

#Round 3

def toonify(accent, sentence)
  list_sentence = sentence.split(' ')
  if accent == "daffy"
    list_sentence.each {|x| x.gsub!(/[s]/, 'th')}
  elsif accent == "elmer"
    list_sentence.each {|x| x.gsub!(/[r]/, 'w')}
  else 
    puts sentence
  end
  puts list_sentence.join(' ')
end


#Round 4

def word_reverse(string_of_word)
  string_of_word.split(' ').reverse
end

#Round 5
def letter_reverse(list_of_word_2)
  #temp = []
  undated = list_of_word_2.split(' ')
  undated.each {|x| x.reverse!}
end
letter_reverse("Now I know what a TV dinner feels like")

#Round 6

def longest(list_of_long_words) 
  place_holder_name = []
  for i in 0..list_of_long_words.length - 1
    if place_holder_name.length == 0
      place_holder_name = list_of_long_words[i]
    elsif list_of_long_words[i].length > place_holder_name.length
      puts list_of_long_words[i].length
      place_holder_name = list_of_long_words[i]
    end
  end
  return place_holder_name
end

longest(["Nothing" , "takes", "the", "taste", "out", "of", "peanut", "butter", "quite", "like", "unrequited", "love"])