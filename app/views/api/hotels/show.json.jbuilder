json.hotel do 
    json.partial! 'hotel', hotel: @hotel

    favorites = @hotel.favorites
    json.count favorites.length
    if current_user
        json.currentUserFav !!hotel.favorites.find_by(favoriter_id: current_user.id)
    end
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