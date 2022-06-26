class Reservation < ApplicationRecord
    validates :hotel_id, :room_id, :customer_id, :checkin, :checkout, :status, presence: true

    belongs_to :hotel,
        foreign_key: :hotel_id,
        class_name: :Hotel

    belongs_to :guest, 
        foreign_key: :customer_id,
        class_name: :User

    # validate valid dates for a reservation? same room cannot be booked on overlapping dates
    # assume room types for right now, not specific rooms (would need to add specific rooms seeds)
end
