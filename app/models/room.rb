# == Schema Information
#
# Table name: rooms
#
#  id          :bigint           not null, primary key
#  room_type   :string           not null
#  occupancy   :integer          not null
#  size        :string
#  beds        :string           not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  building_id :integer
#  img1        :string           default("")
#
class Room < ApplicationRecord
    validates :room_type, :occupancy, :beds, presence: true

    belongs_to :hotel_building,
        foreign_key: :building_id,
        class_name: :Hotel,
        primary_key: :id

end
