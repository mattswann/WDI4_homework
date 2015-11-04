class Person
  attr_accessor :name, :age, :gender, :apartment
  def initialize name, age, gender
    @name = name
    @age = age
    @gender = gender
    @apartment = 'apartment'
  end

  def to_s
    puts "#{name} is a #{age} years old #{gender}, living in #{apartment}"
  end

  def set_apartment= apartment
    @apartment = apartment
  end
end