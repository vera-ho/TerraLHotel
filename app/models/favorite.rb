class Favorite < ApplicationRecord
    belongs_to :user,
        foreign_key: :favoriter_id,
        class_name: :User

    belongs_to :hotel,
        foreign_key: :favorited_id,
        class_name: :Hotel
end
