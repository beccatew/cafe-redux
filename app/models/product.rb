
class Product < ApplicationRecord
  validates_uniqueness_of :name
end
