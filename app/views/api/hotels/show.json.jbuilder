# json.partial! 'hotel', hotel: @hotel

json.hotel do 
    json.partial! 'hotel', hotel: @hotel
end

json.rooms do
    rooms = @hotel.hotel_rooms
    rooms.each do |room|
        json.set! room.id do
            json.partial! '/api/rooms/room', room: room
        end
    end
end

json.reviews do
    reviews = @hotel.reviews
    reviews.each do |review|
        user = review.reviewer
        json.set! review.id do
            json.partial! 'api/reviews/review', review: review
            json.reviewer do
                json.extract! user, :fname, :lname, :email
            end
        end
    end
end