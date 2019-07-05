class Customer < ApplicationRecord

  has_many :projects, dependent: :destroy

end
