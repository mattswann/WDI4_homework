words = ["Billingsgate Loud", "Bloviate", "Blunderbuss"]
  
def lengths(words)

  elements_in_words = (words.each { |x| puts x.length })

end

lengths(words)



def transmogrifier (num1, num2, num3)
  puts (num1 * num2) ** num3
end

transmogrifier(num1, num2, num3)

def toonify (accent, sentence)

  if accent == "daffy"
    puts sentence.gsub(/s/, 'th')
  elsif accent == "elmer"
    puts sentence.gsub(/r/, 'w')
  else
    puts sentence
  end
end

toonify(accent, sentence)
    
def word_reverse (sentence)
 puts sentence.split().reverse
end

word_reverse(sentence)

def letter_reverse (string)
 string.split(' ').map{|word| puts word.reverse()}.join(' ')
end

letter_reverse(string)


  word_array = ['hello', 'what', 'is', 'up']
def longest (word_array)
  word_array = word_array.sort_by {|x| x.length}.reverse
  unless (word_array[0].length == word_array[1].length)
    puts word_array[0]
  else 
    puts "bad-bad"
    
  end


end

  

  
