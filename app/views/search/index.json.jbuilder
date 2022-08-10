@response.body.data.each_with_index do |hotel, index|
    json.set! index do
        json.extract! :hotelId, :name, :starRating, :description, :images, :address, :location, :amenities, :roomCount, :roomTypes
    end
end