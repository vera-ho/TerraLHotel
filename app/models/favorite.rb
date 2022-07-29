# == Schema Information
#
# Table name: favorites
#
#  id           :bigint           not null, primary key
#  favoriter_id :integer          not null
#  favorited_id :integer          not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#
class Favorite < ApplicationRecord
    validates :favorited_id, :favoriter_id, presence: true

    belongs_to :user,
        foreign_key: :favoriter_id,
        class_name: :User

    belongs_to :hotel,
        foreign_key: :favorited_id,
        class_name: :Hotel
end
