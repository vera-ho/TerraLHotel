json.array! @hotels do |hotel|
    json.partial! 'hotel', hotel: hotel
end