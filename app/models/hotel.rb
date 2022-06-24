# == Schema Information
#
# Table name: hotels
#
#  id           :bigint           not null, primary key
#  name         :string           not null
#  email        :string           not null
#  phone_number :string           not null
#  country      :string           not null
#  city         :string           not null
#  address      :string           not null
#  rooms        :integer          not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#
class Hotel < ApplicationRecord
    validates :name, :email, :phone_number, :country, presence: true
    validates :city, :address, :rooms, presence: true
    validates :name, :email, uniqueness: true

    has_many :hotel_rooms, 
        class_name: :Room, 
        foreign_key: :building_id,
        primary_key: :id
end
