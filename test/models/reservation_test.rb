# == Schema Information
#
# Table name: reservations
#
#  id          :bigint           not null, primary key
#  hotel_id    :integer          not null
#  room_id     :integer          not null
#  customer_id :integer          not null
#  checkin     :datetime         not null
#  checkout    :datetime         not null
#  status      :string           not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
require 'test_helper'

class ReservationTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
