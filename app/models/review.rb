class Review < ApplicationRecord
    validates :reviewed_hotel_id, :reviewer_id, :pros, presence: true

    belongs_to :reviewer,
        foreign_key: :reviewer_id,
        class_name: :User

    belongs_to :hotel,
        foreign_key: :reviewed_hotel_id,
        class_name: :Hotel
end
