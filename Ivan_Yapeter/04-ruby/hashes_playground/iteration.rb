# key = "id"
arrayOfID = []
data.each do |hash| #data[0]
  arrayOfID.push hash['id']
  arrayOfID << hash['id']
end
puts arrayOfID

totalNumComment = 0
data.each do |hash|
  totalNumComment += hash['comments']
end
puts totalNumComment

numbers = [2, 4, 6, 8, 10]
number.map do |num|
  num * 2
end

# numbers.map { |num| num*2}

arrayOfFiles = []
data.each do |hash| 
  files = hash["files"].keys
  files.each { |key| puts key }

  # In a for loop!
  # for i in 0..files.length-1
  #   p hash["files"][files[i]].values_at("filename")
  # end
  
end