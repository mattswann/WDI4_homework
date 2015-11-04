require 'pry'

class Dice

  ######################################
  ### To make roll can be called without initiataton
  ### def self.roll
  ### > Dice.roll
  ### => 5 
  def roll num_of_roll=1
    if num_of_roll > 1
      rolled_result = Array.new
      for i in 0..num_of_roll
        rolled_result << rand(1..6)
      end
      return rolled_result
    else
      return rand(1..6)
    end
  end

end

binding.pry