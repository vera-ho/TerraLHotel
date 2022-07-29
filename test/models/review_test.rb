# == Schema Information
#
# Table name: reviews
#
#  id                :bigint           not null, primary key
#  reviewed_hotel_id :integer          not null
#  reviewer_id       :integer          not null
#  created_at        :datetime         not null
#  updated_at        :datetime         not null
#  pros              :text             not null
#  cons              :text             default("")
#
require 'test_helper'

class ReviewTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
