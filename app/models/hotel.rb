class Hotel < ApplicationRecord
    validates :name, :email, :phone_number, :country, presence: true
    validates :city, :address, :rooms, presence: true
    validates :name, :email, uniqueness: true

    has_many :hotel_rooms, 
        class_name: :Room, 
        foreign_key: :room_id,
        primary_key: :id
end
