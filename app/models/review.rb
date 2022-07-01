class Review < ApplicationRecord

    validates :reviewed_hotel_id, :reviewer_id, :rating, :title, :body, presence: true
    # validates_inclusion_of :rating, :in => 1..5
    validates :rating, inclusion: 1..5
    validates :title, length: { maximum: 200 }

    belongs_to :reviewer,
        foreign_key: :reviewer_id,
        class_name: :User

    belongs_to :hotel,
        foreign_key: :reviewed_hotel_id,
        class_name: :Hotel
        
end
