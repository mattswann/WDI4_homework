talking_to_bob = true

while talking_to_bob
	# getting input 
	puts 'Say something to Bob'
	input = gets.chomp
	last_char = input.split("").last
	words = input.split(" ")
	
	if input == "Holla atcha lata"
		puts "Bob says: Laterz bruh"
		talking_to_bob = false
	elsif words.first.downcase == "bro," || words.first.downcase == "bro"
		puts "Bob says: n00b"
	elsif words.include?("grounded")
		puts "Bob says: But I did my homework!"
	elsif last_char == "?"
		puts "Bob says: Yeah whatever man"
	elsif last_char == "!" || input == input.upcase
		puts "Bob says: WOAH CHILL OUT MAN"
	else
		puts "Bob says: Cool, bro"
	end 
end
