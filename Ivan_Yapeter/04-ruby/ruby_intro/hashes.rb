require 'pry'

# Pry will convert key to be hashes
song1 = {
  title: 'hello',
  artist: 'Lionel Richie',
  released: 1983
}

song2 = {
  :title => "nothings gonna change my love for you",
  :artist => 'glen medeiros',
  :released => 1986
}

song3 = {
  'title' => 'a whole new world',
  'artist' => 'disney',
  'released' => 1992
}

# line an array
song4 {
  0 => 'hello',
  1 => 'world',
  2 => '!'
}

song1[:title] # To get title value from song1

binding.pry # Pause after running