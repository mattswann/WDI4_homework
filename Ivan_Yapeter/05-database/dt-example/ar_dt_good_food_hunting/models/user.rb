class User < ActiveRecord::Base
  # Active Record give us the password method
  has_secure_password
end