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
class Review < ApplicationRecord
    validates :reviewed_hotel_id, :reviewer_id, :pros, presence: true

    belongs_to :reviewer,
        foreign_key: :reviewer_id,
        class_name: :User

    belongs_to :hotel,
        foreign_key: :reviewed_hotel_id,
        class_name: :Hotel
end
