=begin

# Quiz - 2 Talk to Bob
---
​
Bob is a teenager. He doesn't say a lot.
​
When you ask him a question, he'll reply, "Yeah whatever man"
​
When you say a sentence, he'll reply, "Cool, bro"
​
When you yell at him he should reply "WOAH, CHILL OUT MAN"
​
If you say "Holla atcha lata", he'll reply "Laterz bruh" and the program will quit.
​
There should be looping input so you'll keep talking to Bob until you say "Holla atcha lata"
​
## Extension
___
​
1. When you start a sentence with "Bro," he'll talk to you in [leetspeak](http://en.wikipedia.org/wiki/Leet).
​
2. When you mention the word "grounded" he'll say "But I did my homework!"

=end

# get input
puts "Ask Bob a question."
input = gets.chomp.to_s

if input.include? "grounded"
  puts "But I did my homework!"

elsif input.split.first == "Bro,"

  while input != "Holla atcha lata"

    if input.include? "."
      puts "c00l, br0"
      puts "Ask Bob a question."
      input = gets.chomp.to_s

    elsif input.include? "?"
      puts "y34h wh473v3r m4n"
      puts "Ask Bob a question."
      input = gets.chomp.to_s

    elsif input.include? "!"
      puts "wh04, ch1ll 0u7 m4n"
      puts "Ask Bob a question."
      input = gets.chomp.to_s

    end
  end

  puts "Laterz bruh"

else

  while input != "Holla atcha lata"

    if input.include? "."
      puts "Cool, bro"
      puts "Ask Bob a question."
      input = gets.chomp.to_s

    elsif input.include? "?"
      puts "Yeah whatever man"
      puts "Ask Bob a question."
      input = gets.chomp.to_s

    elsif input.include? "!"
      puts "WHOA, CHILL OUT MAN"
      puts "Ask Bob a question."
      input = gets.chomp.to_s

    end
  end

  puts "Laterz bruh"

end
