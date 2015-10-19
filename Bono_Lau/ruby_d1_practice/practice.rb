
#Round 1
def lengths (words)
  l = words.length - 1
  newWords = []
  for i in 0..l
 newWords[i] = words[i].length
  end
  p newWords
  newWords
end

# lengths ["hello", "what", "is", "up", "dude"]

#Round 2
def transmogrifier (num1,num2,expo)
  ans = (num1*num2)**expo
  puts ans
  ans
end

# transmogrifier 5,4,3

#Round 3
def toonify (accent,sentence)
  accentList = ['daffy','elmer']
  if accentList.include?(accent) 
    accentOpt = accentList.index(accent)
    if accentOpt == 0
     p (sentence.gsub! 's','th')
   else
     p (sentence.gsub! 'r','w')
    end 
  else  
  p 'accent does not exist!'+sentence
  end
end

# toonify 'daffy','so you smell like sausage'
# toonify 'elmer','are you comfortable with your ring?'
# toonify 'whats','Got accent?'

#round 4
def wordReverse (sentence)
  p (sentence.split(' ').reverse.join(' '))
end

# wordReverse 'Now I knwo what a TV dinner feels like'

#round 5
def letterReverse (letter)
  letterRe = letter.split(' ')
  # letterRe.each {|l| l.reverse}
  len = letterRe.length - 1
  lReverse = []
for i in 0..len
   lReverse[i] = letterRe[i].reverse
  end

  p lReverse.join(' ')
end

#letterReverse 'Now I knwo what a TV dinner feels like'

def longest(str)
str = str.sort_by {|x| x.length}
p str.last
return str.last
end

longest ["Nothing" , "takes", "the", "taste", "out", "of", "peanut", "butter", "quite", "like", "unrequited", "love"]


