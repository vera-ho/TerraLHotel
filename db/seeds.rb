# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
demo = User.create({
    fname: "Demo",
    lname: "User",
    email: "demo@terralhotel.com",
    password: "welcomeToTerra"
})

Hotel.destroy_all
h1 = Hotel.create({
    name: "The Whitby Hotel", email: "thewhitby@terralhotels.com" , phone_number: "212-001-0001", country: "USA",
    city: "New York City", address: "18 W 56th Street, New York City, NY" , rooms: 86
})
h2 = Hotel.create({
    name: "Made Hotel", email: "made@terralhotels.com" , phone_number: "212-001-0001", country: "USA",
    city: "New York City", address: "44 W 29th St, New York City, NY, USA" , rooms: 108
})

h3 = Hotel.create({
    name: "Sixty Soho", email: "sixtysoho@terralhotels.com" , phone_number: "212-001-0001", country: "USA",
    city: "New York City", address: "60 Thompson Street, New York City, NY" , rooms: 100
})

h4 = Hotel.create({
    name: "The Carlyle", email: "thecarlyle@terralhotels.com" , phone_number: "212-001-0001", country: "USA",
    city: "New York City", address: "35 East 76th Street, New York City, NY" , rooms: 190
})

h5 = Hotel.create({
    name: "Mint House", email: "minthouse@terralhotels.com" , phone_number: "212-001-0001", country: "USA",
    city: "New York City", address: "25 W 39th Street, Suite 700, New York, NY" , rooms: 155
})

Room.destroy_all
r1 = Room.create({
    name: "", room_type: "Deluxe Room", beds: "1 double/full bed" , occupancy: 2, 
    size: "215 ft²/20 m²", building_id: 1
})

r2 = Room.create({
    name: "", room_type: "Standard Room", beds: "2 Single Beds or 1 King Bed", occupancy: 2, 
    size: "215 ft²/20 m²", building_id: 1
})

r3 = Room.create({
    name: "", room_type: "Prestige Suite with Private Pool", beds: "1 King Bed", occupancy: 2, 
    size: "807 ft²/75 m²", building_id: 2
})

r4 = Room.create({
    name: "", room_type: "Muse", beds: "1 Queen Bed", occupancy: 2, 
    size: "215 ft²/20 m²", building_id: 3
})

r5 = Room.create({
    name: "", room_type: "Goddess Suite", beds: "2 double beds", occupancy: 4, 
    size: "269 ft²/25 m²", building_id: 3
})

r6 = Room.create({
    name: "", room_type: "Suite with Terrace", beds: "1 Double/Full Bed" , occupancy: 2, 
    size: "430 ft²/40 m²", building_id: 3
})

r7 = Room.create({
    name: "", room_type: "Glass Cottage", beds: "1 Queen Bed", occupancy: 2, 
    size: "139 ft²/13 m²", building_id: 4
})

r8 = Room.create({
    name: "", room_type: "Deluxe Suite Grove View", beds: "1 King Bed", occupancy: 2, 
    size: "678 ft²/63 m²", building_id: 4
})

r9 = Room.create({
    name: "", room_type: "Premium", beds: "2 Single Beds or 1 King Bed", occupancy: 2, 
    size: "161 ft²/15 m²", building_id: 5
})

r10 = Room.create({
    name: "", room_type: "Superior", beds: "2 Single Beds or 1 King Bed", occupancy: 2, 
    size: "193 ft²/18 m²", building_id: 5
})

r11 = Room.create({
    name: "", room_type: "Superior Triple", beds: "3 Single Beds or 1 Double & 1 Single Bed", occupancy: 3, 
    size: "258 ft²/24 m²", building_id: 5
})

Reservation.create({
    hotel_id: 1, room_id: 1, customer_id: 1, checkin: "July 1, 2022", checkout: "July 3, 2022", status: "booked"
})

Reservation.create({
    hotel_id: 2, room_id: 3, customer_id: 1, checkin: "July 22, 2022", checkout: "July 25, 2022", status: "booked"
})

Reservation.create({
    hotel_id: 3, room_id: 5, customer_id: 1, checkin: "July 7, 2022", checkout: "July 8, 2022", status: "booked"
})

Reservation.create({
    hotel_id: 4, room_id: 7, customer_id: 1, checkin: "July 30, 2022", checkout: "August 15, 2022", status: "booked"
})

Reservation.create({
    hotel_id: 5, room_id: 11, customer_id: 1, checkin: "July 15, 2022", checkout: "July 16, 2022", status: "booked"
})