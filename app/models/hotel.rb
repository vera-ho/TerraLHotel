# == Schema Information
#
# Table name: hotels
#
#  id         :bigint           not null, primary key
#  name       :string           not null
#  country    :string           not null
#  city       :string           not null
#  address    :string           not null
#  rooms      :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  img1       :string           default("")
#  img2       :string           default("")
#  img3       :string           default("")
#  state      :string           default("")
#

class Hotel < ApplicationRecord
    validates :name, :country, :city, :address, :rooms, presence: true
    validates :name, uniqueness: true

    has_many :hotel_rooms, 
        class_name: :Room, 
        foreign_key: :building_id,
        primary_key: :id

    has_many :reservations,
        foreign_key: :hotel_id,
        class_name: :Reservation

    has_many :reviews,
        foreign_key: :reviewed_hotel_id,
        class_name: :Review
end
