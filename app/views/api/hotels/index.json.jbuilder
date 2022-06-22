@hotels.each do |hotel|
    json.set! hotel.id do
        json.partial! 'hotel', hotel: hotel
    end
end