@hotels.each do |hotel|
    json.set! hotel.id do
        json.partial! 'hotel', hotel: hotel

        if current_user
            currentFavorite = hotel.favorites.find_by(favoriter_id: current_user.id)
            json.currentUserFav !!currentFavorite
            
            if currentFavorite
                json.favoriteId currentFavorite.id
            end
        end
    end
end