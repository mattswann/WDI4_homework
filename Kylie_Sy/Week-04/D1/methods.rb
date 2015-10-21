# require 'pry'

# ROUND 1 -----------------------------------
words = ["hello", "what", "is", "up", "dude"]
def lengths words
	words_length = []
	words.each do |word|
		words_length.push(word.length) 
	end
	return words_length
end

puts 'ROUND 1'
# if not enclosed in "#{}", prints each length in a new line WHY
puts "#{lengths(words)}"  # => [5, 4, 2, 2, 4]
puts '-----------'

# ROUND 2 -----------------------------------
def transmogrifier num1, num2, num3
	return ((num1 * num2) ** num3)
end

puts 'ROUND 2'
puts transmogrifier(5, 4, 3)
puts transmogrifier(13, 12, 5)
puts transmogrifier(42, 13, 7)
puts '-----------'


# ROUND 3 -----------------------------------
sentence1 = "so you smell like sausage"
sentence2 = "bringing prunes"
accent1 = 'daffy'
accent2 = 'elmer'

def toonify accent, sentence
	letters_arr = sentence.split('')
	letters_arr.each do |letter|
		if accent == 'daffy'
			if letter == 's'
				letter.replace 'th'
			end
	 	elsif accent == 'elmer'
	 		if letter == 'r'
				letter.replace 'w'
			end
	 	end
	end
	return letters_arr.join('')
end

puts 'ROUND 3'
puts "daffy says: #{toonify(accent1, sentence1)}"
puts "elmer says: #{toonify(accent2, sentence2)}"
puts '-----------'

# ROUND 4 -----------------------------------
def word_reverse sentence
	word_split = sentence.split(' ')
	return word_split.reverse.join(' ')
end

puts 'ROUND 4'
puts word_reverse("Now I know what a TV dinner feels like")
puts '-----------'

# ROUND 5 -----------------------------------
def letter_reverse sentence
	word_arr = []
	word_split = sentence.split(' ') # forms an array of words
	word_split.each do |word|
		word_arr.push(word.split('').reverse.join('')) # splits the word, reverses, joins and pushed into an array
	end
	return word_arr.join(' ')
end

puts 'ROUND 5'
puts letter_reverse("Now I know what a TV dinner feels like")
puts '-----------'

# ROUND 6 -----------------------------------
def longest words_arr
	words_length = lengths(words_arr) # function from round 1
	return words_arr[words_length.index(words_length.max)] #words_arr[index of max]
end

puts 'ROUND 6'
puts longest(["oh", "good", "grief"]) # => 'grief'
puts longest(["Nothing" , "takes", "the", "taste", "out", "of", "peanut", "butter", "quite", "like", "unrequited", "love"]) # => "unrequited"
puts '-----------'

# binding.pry
