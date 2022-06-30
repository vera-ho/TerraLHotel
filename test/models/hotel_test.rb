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
require 'test_helper'

class HotelTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
