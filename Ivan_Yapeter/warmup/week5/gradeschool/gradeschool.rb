require 'pry'

class School 


  # school = School.new("Haleakala Hippy School")
  def initialize school_name
    # @school_name = school_name
    
    # school.db
    # => {}
    @db = {}

  end

  # school.add("Phil", 2)
  # school.add("Jennifer", 3)
  # school.add("Little Billy", 1)
  # => {2 => ["James", "Blair"], 3 => ["Jennifer"], 1 => ["Little Billy"]}
  def add student_name, grade

    @db[grade] ||=[] # @db[grade] || @db[grade] = []

    # if !@db[grade]
    #   @db[grade] = []
    # end

    @db[grade] << student_name

  end

  # school.grade(2)
  # => ["James", "Blair"]
  def grade grade
    @db[grade]
  end

  # school.sort
  # => {1 => ["Little Billy"], 2 => ["Blair", "James"], 3 => ["Jennifer"]}
  def sort 
    @db.sort
  end



end

binding.pry