# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

## ************* USER SEEDS ************* ##
User.destroy_all
demo = User.create({
    fname: "Demo",
    lname: "User",
    email: "demo@terralhotel.com",
    password: "welcomeToTerra"
})

User.create({
    fname: "Doctor",
    lname: "Who",
    email: "thedoctor@terralhotel.com",
    password: "allons-y!"
})

## ************* HOTEL SEEDS ************* ##
Hotel.destroy_all
Hotel.create({      
    name: "The Whitby Hotel", country: "USA", state: "NY", city: "New York City", address: "18 W 56th Street" , rooms: 86,
    img1: "https://media.discordapp.net/attachments/862515957842706475/992186034106413086/hotel001_th.jpeg", img2: ""
}) # building_id: 1

Hotel.create({
    name: "Made Hotel", country: "USA", state: "NY", city: "New York City", address: "44 W 29th St" , rooms: 108,
    img1: "https://media.discordapp.net/attachments/862515957842706475/992186034446155827/hotel002_th.jpeg", img2: ""
}) # building_id: 2

Hotel.create({
    name: "Sixty Soho", country: "USA", state: "NY", city: "New York City", address: "60 Thompson Street" , rooms: 100,
    img1: "https://media.discordapp.net/attachments/862515957842706475/992186034769113118/hotel003_th.jpeg", img2: ""
}) # building_id: 3

Hotel.create({
    name: "The Carlyle", country: "USA", state: "NY", city: "New York City", address: "35 East 76th Street" , rooms: 190,
    img1: "https://cdn.discordapp.com/attachments/862515957842706475/992186036375535666/hotel009_th.jpeg", img2: ""
}) # building_id: 4

Hotel.create({
    name: "Mint House", country: "USA", state: "NY", city: "New York City", address: "25 W 39th Street, Suite 700" , rooms: 155,
    img1: "https://cdn.discordapp.com/attachments/862515957842706475/992186081376223253/hotel013_th.jpeg", img2: ""
}) # building_id: 5

Hotel.create({
    name: "Shonai Hotel Suiden Terrasse", country: "Japan", state: "", city: "Yamagata", address: "Kitakyoden Shimotorinosu 23-1", rooms: 135,
    img1: "https://media.discordapp.net/attachments/862515957842706475/992186035016581130/hotel004_th.jpeg", img2: ""
}) # building_id: 6

Hotel.create({
    name: "The Edwin Hotel", country: "USA", state: "NY", city: "Chattanooga", address: "102 Walnut Street, Chattanooga, TN", rooms: 90,
    img1: "https://cdn.discordapp.com/attachments/862515957842706475/992186036023209994/hotel008_th.jpeg", img2: ""
}) # building_id: 7

Hotel.create({
    name: "San Canzian Village & Hotel", country: "Croatia", state: "", city: "Buje", address: "Mužolini Donji 7, Buje", rooms: 24,
    img1: "https://media.discordapp.net/attachments/862515957842706475/992186035226292244/hotel005_th.jpeg", img2: ""
}) # building_id: 8

Hotel.create({
    name: "Cervo Mountain Resort", country: "Switzerland", state: "", city: "Zermatt", address: "Riedweg 156, Postfach 388", rooms: 54,
    img1: "https://cdn.discordapp.com/attachments/862515957842706475/992186035486334976/hotel006_th.jpeg", img2: ""
}) # building_id: 9

Hotel.create({
    name: "Hotel des Trois Vallees", country: "France", state: "", city: "Courchevel", address: "Rue Park City", rooms: 31,
    img1: "https://cdn.discordapp.com/attachments/862515957842706475/992186081028087808/hotel012_th.jpeg", img2: ""
}) # building_id: 10

Hotel.create({
    name: "Forestis Dolomites", country: "Italy", state: "", city: "Plose", address: "39042 Bressanone Bolzano, ", rooms: 60,
    img1: "https://cdn.discordapp.com/attachments/862515957842706475/992186035721211955/hotel007_th.jpeg", img2: ""
}) # building_id: 11

Hotel.create({
    name: "Higashiyama Niseko Village", country: "Japan", state: "", city: "Niseko", address: "Aza Soga 919-28", rooms: 50,
    img1: "https://cdn.discordapp.com/attachments/862515957842706475/992186082332524604/hotel015_th.jpeg", img2: ""
}) # building_id: 12

Hotel.create({
    name: "Esiweni Luxury Safari Lodge", country: "South Africa", state: "", city: "Ladysmith", address: "Memorial Gate, Nambiti Game Reserve, ", rooms: 5,
    img1: "https://cdn.discordapp.com/attachments/862515957842706475/992186082034720819/hotel014_th.jpeg", img2: ""
}) # building_id: 13

Hotel.create({
    name: "Las Casitas, Colca Canyon", country: "Peru", state: "Arequipa", city: "Yanque", address: "Parque Curiña s/n (Desvío carretera Yanque a Achoma)", rooms: 20,
    img1: "https://cdn.discordapp.com/attachments/862515957842706475/992186080709328987/hotel011_th.jpeg", img2: ""
}) # building_id: 14

Hotel.create({
    name: "Hotel Awa", country: "Chile", state: "", city: "Puerto Varas", address: "Ruta 225, Km. 27", rooms: 16,
    img1: "https://cdn.discordapp.com/attachments/862515957842706475/992186036677521448/hotel010_th.jpeg", img2: ""
}) # building_id: 15

Hotel.create({
    name: "Zannier Hotels Omaanda", country: "Namibia", state: "", city: "Windhoek East", address: "Omaanda Lodge, Farm n° 78", rooms: 10,
    img1: "https://cdn.discordapp.com/attachments/862515957842706475/992186082642886736/hotel016_th.jpeg", img2: ""
}) # building_id: 16

## ************* ROOM SEEDS ************* ##
Room.destroy_all

# 1, 2
Room.create({ room_type: "Deluxe Room", beds: "1 double/full bed" , occupancy: 2, size: "215 ft²/20 m²", building_id: 1, 
     img1: "https://cdn.discordapp.com/attachments/862515957842706475/992186127584870481/room001_th.jpeg"})
Room.create({ room_type: "Standard Room", beds: "2 Single Beds or 1 King Bed", occupancy: 2, size: "215 ft²/20 m²", building_id: 1,
     img1: "https://cdn.discordapp.com/attachments/862515957842706475/992186127811358770/room002_th.jpeg"})

# 3
Room.create({ room_type: "Prestige Suite with Private Pool", beds: "1 King Bed", occupancy: 2, size: "807 ft²/75 m²", building_id: 2,
     img1: "https://cdn.discordapp.com/attachments/862515957842706475/992186128306278562/room004_th.jpeg"})

# 4, 5, 6
Room.create({ room_type: "Muse", beds: "1 Queen Bed", occupancy: 2, size: "215 ft²/20 m²", building_id: 3,
     img1: "https://cdn.discordapp.com/attachments/862515957842706475/992186128524390502/room005_th.jpeg"})
Room.create({ room_type: "Goddess Suite", beds: "2 double beds", occupancy: 4, size: "269 ft²/25 m²", building_id: 3, 
     img1: "https://cdn.discordapp.com/attachments/862515957842706475/992186127584870481/room001_th.jpeg"})
Room.create({ room_type: "Suite with Terrace", beds: "1 Double/Full Bed" , occupancy: 2, size: "430 ft²/40 m²", building_id: 3, 
     img1: "https://cdn.discordapp.com/attachments/862515957842706475/992186127811358770/room002_th.jpeg"})

# 7, 8
Room.create({ room_type: "Glass Cottage", beds: "1 Queen Bed", occupancy: 2, size: "139 ft²/13 m²", building_id: 4, 
     img1: "https://cdn.discordapp.com/attachments/862515957842706475/992186128306278562/room004_th.jpeg"})
Room.create({ room_type: "Deluxe Suite Grove View", beds: "1 King Bed", occupancy: 2, size: "678 ft²/63 m²", building_id: 4, 
     img1: "https://cdn.discordapp.com/attachments/862515957842706475/992186127811358770/room002_th.jpeg"})

# 9, 10, 11
Room.create({ room_type: "Premium", beds: "2 Single Beds or 1 King Bed", occupancy: 2, size: "161 ft²/15 m²", building_id: 5, 
     img1: "https://cdn.discordapp.com/attachments/862515957842706475/992186127584870481/room001_th.jpeg"})
Room.create({ room_type: "Superior", beds: "2 Single Beds or 1 King Bed", occupancy: 2, size: "193 ft²/18 m²", building_id: 5, 
     img1: "https://cdn.discordapp.com/attachments/862515957842706475/992186128524390502/room005_th.jpeg"})
Room.create({ room_type: "Superior Triple", beds: "3 Single Beds or 1 Double & 1 Single Bed", occupancy: 3, size: "258 ft²/24 m²", building_id: 5, 
     img1: "https://cdn.discordapp.com/attachments/862515957842706475/992186128306278562/room004_th.jpeg"})

# 12, 13
Room.create({ room_type: "Maisonette", beds: "2 Single Beds", occupancy: 4, size: "462 ft²/43 m²", building_id: 6, 
    img1: "https://cdn.discordapp.com/attachments/862515957842706475/992186128306278562/room004_th.jpeg"})
Room.create({ room_type: "Triple Room", beds: "3 Single Beds", occupancy: 4, size: "312 ft²/29 m²", building_id: 6, 
    img1: "https://cdn.discordapp.com/attachments/862515957842706475/992186127584870481/room001_th.jpeg"})

# 14, 15, 16
Room.create({ room_type: "Athena Suite", beds: "1 King Bed & 2 Double Beds", occupancy: 6, size: "1345 ft²/124 m²", building_id: 7, 
    img1: "https://cdn.discordapp.com/attachments/862515957842706475/992186127584870481/room001_th.jpeg"})
Room.create({ room_type: "Hoyt House Deluxe Suite", beds: "1 King Bed", occupancy: 2, size: "635 ft²/58 m²", building_id: 7, 
    img1: "https://cdn.discordapp.com/attachments/862515957842706475/992186127811358770/room002_th.jpeg"})
Room.create({ room_type: "Hoyt House Grand Suite", beds: "1 King Bed", occupancy: 2, size: "1228 ft²/114 m²", building_id: 7, 
    img1: "https://cdn.discordapp.com/attachments/862515957842706475/992186128524390502/room005_th.jpeg"})

# 17, 18
Room.create({ room_type: "Club Room", beds: "1 King Bed", occupancy: 2, size: "365 ft²/34 m²", building_id: 8, 
    img1: "https://cdn.discordapp.com/attachments/862515957842706475/992186128306278562/room004_th.jpeg"})
Room.create({ room_type: "Club Suite", beds: "1 King Bed", occupancy: 2, size: "731 ft²/68 m²", building_id: 8, 
    img1: "https://cdn.discordapp.com/attachments/862515957842706475/992186128524390502/room005_th.jpeg"})

# 19, 20
Room.create({ room_type: "Volkshaus", beds: "1 King Bed", occupancy: 3, size: "355 ft²/33 m²", building_id: 9, 
    img1: "https://cdn.discordapp.com/attachments/862515957842706475/992186127811358770/room002_th.jpeg"})
Room.create({ room_type: "Corvatsch Room", beds: "2 Single Beds or 1 King Bed", occupancy: 2, size: "269 ft²/25 m²", building_id: 9, 
    img1: "https://cdn.discordapp.com/attachments/862515957842706475/992186127584870481/room001_th.jpeg"})

# 21, 22
Room.create({ room_type: "Marquis Suite", beds: "1 King Bed", occupancy: 2, size: "861 ft²/79 m²", building_id: 10, 
    img1: "https://cdn.discordapp.com/attachments/862515957842706475/992186128306278562/room004_th.jpeg"})
Room.create({ room_type: "Eiffel Suite", beds: "1 King Bed", occupancy: 2, size: "650 ft²/60 m²", building_id: 10, 
    img1: "https://cdn.discordapp.com/attachments/862515957842706475/992186127811358770/room002_th.jpeg"})

# 23, 24, 25, 26
Room.create({ room_type: "Arno River View", beds: "1 Queen Bed", occupancy: 2, size: "484 ft²/44 m²", building_id: 11, 
    img1: "https://cdn.discordapp.com/attachments/862515957842706475/992186127811358770/room002_th.jpeg"})
Room.create({ room_type: "Superior Junior Suite", beds: "1 King Bed", occupancy: 4, size: "592 ft²/55 m²", building_id: 11, 
    img1: "https://cdn.discordapp.com/attachments/862515957842706475/992186127584870481/room001_th.jpeg"})
Room.create({ room_type: "Grand Premium with View", beds: "1 King Bed", occupancy: 3, size: "355 ft²/33 m²", building_id: 11, 
    img1: "https://cdn.discordapp.com/attachments/862515957842706475/992186128524390502/room005_th.jpeg"})
Room.create({ room_type: "Two Bedroom VIP Suite", beds: "1 Queen Bed", occupancy: 2, size: "914 ft²/85 m².", building_id: 11, 
    img1: "https://cdn.discordapp.com/attachments/862515957842706475/992186128306278562/room004_th.jpeg"})

# 27, 28, 29
Room.create({ room_type: "Standard Wide + Balcony", beds: "1 Double/Full Bed", occupancy: 2, size: "247 ft²/23 m²", building_id: 12, 
    img1: "https://cdn.discordapp.com/attachments/862515957842706475/992186128306278562/room004_th.jpeg"})
Room.create({ room_type: "Deluxe Palace Garden View", beds: "1 King Bed", occupancy: 2, size: "764 ft²/70 m²", building_id: 12, 
    img1: "https://cdn.discordapp.com/attachments/862515957842706475/992186127584870481/room001_th.jpeg"})
Room.create({ room_type: "Susuki King", beds: "1 King Bed", occupancy: 2, size: "646 ft²/60 m²", building_id: 12, 
    img1: "https://cdn.discordapp.com/attachments/862515957842706475/992186128524390502/room005_th.jpeg"})

# 30
Room.create({ room_type: "Alcoba", beds: "1 Queen Bed", occupancy: 2, size: "204 ft²/19 m²", building_id: 13, 
    img1: "https://cdn.discordapp.com/attachments/862515957842706475/992186127811358770/room002_th.jpeg"})

# 31
Room.create({ room_type: "Aposento", beds: "2 Single Beds or 1 King Bed", occupancy: 2, size: "322 ft²/30 m².", building_id: 14, 
    img1: "https://cdn.discordapp.com/attachments/862515957842706475/992186127584870481/room001_th.jpeg"})

# 32, 33, 34
Room.create({ room_type: "Dawn Room", beds: "2 Double Beds", occupancy: 3, size: "430 ft²/39 m²", building_id: 15, 
    img1: "https://cdn.discordapp.com/attachments/862515957842706475/992186127584870481/room001_th.jpeg"})
Room.create({ room_type: "Bungalow", beds: "2 Single Beds", occupancy: 2, size: "484 ft²/45 m²", building_id: 15, 
    img1: "https://cdn.discordapp.com/attachments/862515957842706475/992186128306278562/room004_th.jpeg"})
Room.create({ room_type: "Park Family Suite", beds: "1 Double & 2 Single Beds", occupancy: 5, size: "645 ft²/60 m²", building_id: 15, 
    img1: "https://cdn.discordapp.com/attachments/862515957842706475/992186128524390502/room005_th.jpeg"})

#35, 36
Room.create({ room_type: "One Bedroom Tent", beds: "2 Single Beds or 1 King Bed", occupancy: 2, size: "42 ft²/3 m²", building_id: 16, 
    img1: "https://cdn.discordapp.com/attachments/862515957842706475/992186127584870481/room005_th.jpeg"})
Room.create({ room_type: "Backyward Winetank Suite", beds: "1 King Bed", occupancy: 3, size: "322 ft²/30 m²", building_id: 16, 
    img1: "https://cdn.discordapp.com/attachments/862515957842706475/992186127584870481/room001_th.jpeg"})

## *********** RESERVATION SEEDS *********** ##
Reservation.destroy_all
Reservation.create({ hotel_id: 1, room_id: 1, customer_id: 1, checkin: "April 1, 2022", checkout: "April 3, 2022", status: "stayed" })
Reservation.create({ hotel_id: 2, room_id: 3, customer_id: 1, checkin: "July 22, 2022", checkout: "July 25, 2022", status: "booked" })
Reservation.create({ hotel_id: 3, room_id: 5, customer_id: 1, checkin: "July 7, 2022", checkout: "July 8, 2022", status: "updated" })
Reservation.create({ hotel_id: 4, room_id: 7, customer_id: 1, checkin: "July 30, 2022", checkout: "August 15, 2022", status: "updated" })
Reservation.create({ hotel_id: 5, room_id: 11, customer_id: 1, checkin: "July 15, 2022", checkout: "July 16, 2022", status: "booked" })
Reservation.create({ hotel_id: 7, room_id: 14, customer_id: 2, checkin: "August 1, 2022", checkout: "August 5, 2022", status: "updated" })
Reservation.create({ hotel_id: 8, room_id: 18, customer_id: 1, checkin: "August 1, 2022", checkout: "August 5, 2022", status: "booked" })
Reservation.create({ hotel_id: 10, room_id: 21, customer_id: 2, checkin: "September 12, 2022", checkout: "September 30, 2022", status: "booked" })
Reservation.create({ hotel_id: 12, room_id: 29, customer_id: 2, checkin: "January 1, 2023", checkout: "January 6, 2023", status: "booked" })
Reservation.create({ hotel_id: 13, room_id: 30, customer_id: 2, checkin: "January 19, 2023", checkout: "February 14, 2023", status: "booked" })
Reservation.create({ hotel_id: 15, room_id: 33, customer_id: 1, checkin: "January 12, 2023", checkout: "January 19, 2023", status: "booked" })
Reservation.create({ hotel_id: 16, room_id: 35, customer_id: 2, checkin: "May 5, 2023", checkout: "December 12, 2023", status: "updated" })

## ************* REVIEW SEEDS ************* ##
Review.destroy_all
Review.create({ reviewed_hotel_id: 1, reviewer_id: 1, pros: "Great location", cons: "Wish there was a heated pool."})
Review.create({ reviewed_hotel_id: 2, reviewer_id: 1, pros: "Welcome and service was extremely pleasant. Very generous extras each day, including bar in the room, cheese plate, etc. A charming oasis. The room was very spacious, a suite with balcony, well designed and furnished space.", cons: ""})
Review.create({ reviewed_hotel_id: 2, reviewer_id: 2, pros: "Room was fabulous but the food was phenomenal.", cons: "Service at reception is usually kind but could be improved and be more helpful for directions/information."})
Review.create({ reviewed_hotel_id: 3, reviewer_id: 2, pros: "Love the food around here.", cons: ""})
Review.create({ reviewed_hotel_id: 4, reviewer_id: 1, pros: "Very upscale", cons: ""})
Review.create({ reviewed_hotel_id: 4, reviewer_id: 2, pros: "Staff is very nice", cons: "I felt the menu was a little too elaborate, especially when one wants something in the room. If it were possible to have a few simpler dishes for hotel guests that would be nice."})
Review.create({ reviewed_hotel_id: 5, reviewer_id: 1, pros: "Like staying at home", cons: ""})
Review.create({ reviewed_hotel_id: 6, reviewer_id: 2, pros: "The hotel is located in a residential and quiet neighborhood. The staff is very respectful and will make you feel welcomed from check-in to check-out. The hotel has an amazing restaurant with divine cuisine. I highly recommend booking a table there during your stay.", cons: "The bedrooms have great amenities (A/C, complimentary mini-bar, fast internet, steam room...) but the furniture and the design of the bathroom could be improved in the standard rooms."})
Review.create({ reviewed_hotel_id: 8, reviewer_id: 1, pros: "Really good seafood", cons: ""})
Review.create({ reviewed_hotel_id: 9, reviewer_id: 2, pros: "The most peaceful experience I've ever had. Beautiful scenery", cons: ""})
Review.create({ reviewed_hotel_id: 10, reviewer_id: 1, pros: "Great wine selection", cons: ""})
Review.create({ reviewed_hotel_id: 11, reviewer_id: 2, pros: "I didn't want to leave", cons: ""})
Review.create({ reviewed_hotel_id: 12, reviewer_id: 1, pros: "Very quaint!", cons: "We were kind of bored"})
Review.create({ reviewed_hotel_id: 13, reviewer_id: 2, pros: "Absolutely worth it. We saw amazing animals!", cons: ""})
Review.create({ reviewed_hotel_id: 14, reviewer_id: 1, pros: "Very canyon-y", cons: ""})
Review.create({ reviewed_hotel_id: 16, reviewer_id: 2, pros: "Stunning, tiny tent", cons: "Can get a little cramped"})