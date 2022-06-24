json.partial! 'hotel', hotel: @hotel

# json.hotel do 
#     json.partial! 'hotel', hotel: @hotel
# end

# json.rooms do
#     @hotel.hotel_rooms.each do |room|
#         json.set! room.id do
#             json.partial! '/api/rooms/room', room: room
#         end
#     end
# end