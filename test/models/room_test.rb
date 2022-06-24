# == Schema Information
#
# Table name: rooms
#
#  id          :bigint           not null, primary key
#  name        :string
#  room_type   :string           not null
#  occupancy   :integer          not null
#  size        :string
#  beds        :string           not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#  building_id :integer
#
require 'test_helper'

class RoomTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
