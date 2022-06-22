class Hotel < ApplicationRecord
    validates :name, :email, :phone_number, :country, presence: true
    validates :city, :address, :rooms, presence: true
    validates :name, :email, uniqueness: true
end
