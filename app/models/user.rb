class User < ApplicationRecord

  has_many :tasks
  belongs_to :company

  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable

  def admin?
    role == 'admin'
  end

end
