# json.partial! 'hotel', hotel: @hotel

json.hotel do 
    json.partial! 'hotel', hotel: @hotel
end

# this throws error - GET 500 Internal Server Error
json.rooms do
    rooms = @hotel.hotel_rooms
    debugger
    @hotel.hotel_rooms.each do |room|
        # puts room
        json.set! room.id do
            json.partial! '/api/rooms/room', room: room
        end
    end
end

