@hotels.each do |hotel|
    json.set! hotel.id do
        json.partial! 'hotel', hotel: hotel
        if current_user
            json.currentUserFav !!hotel.favorites.find_by(favoriter_id: current_user.id)
        end
    end
end