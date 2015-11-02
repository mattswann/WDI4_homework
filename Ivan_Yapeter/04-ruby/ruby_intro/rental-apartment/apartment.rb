class Apartment
  attr_accessor :price, :is_occupied, :sqft, :num_beds, :num_baths, :renters
  def initialize price, is_occupied, sqft, num_beds, num_baths
    @price = price
    @is_occupied = is_occupied
    @sqft = sqft
    @num_beds = num_beds
    @num_baths = num_baths
    @renters = []
  end

  def to_s
    puts "Apartment price is #{price}, #{is_occupied}, size #{sqft}, #{num_beds} beds, and #{num_baths}. Rented by #{renters}."
  end

  def renters
    @renters.map do |renter|
      renter.name
    end.join.(', ')
  end

  def set_renters= new_renter
    @renters << new_renter
  end
end