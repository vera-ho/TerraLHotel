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
require 'test_helper'

class RoomTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
