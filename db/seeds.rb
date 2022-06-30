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

## ************* HOTEL SEEDS ************* ##
Hotel.destroy_all
Hotel.create({      
    name: "The Whitby Hotel", country: "USA", state: "NY", city: "New York City", address: "18 W 56th Street" , rooms: 86,
    # img1: "", img2: ""
}) # building_id: 1

Hotel.create({
    name: "Made Hotel", country: "USA", state: "NY", city: "New York City", address: "44 W 29th St" , rooms: 108,
    # img1: "", img2: ""
}) # building_id: 2

Hotel.create({
    name: "Sixty Soho", country: "USA", state: "NY", city: "New York City", address: "60 Thompson Street" , rooms: 100,
    # img1: "", img2: ""
}) # building_id: 3

Hotel.create({
    name: "The Carlyle", country: "USA", state: "NY", city: "New York City", address: "35 East 76th Street" , rooms: 190,
    # img1: "", img2: ""
}) # building_id: 4

Hotel.create({
    name: "Mint House", country: "USA", state: "NY", city: "New York City", address: "25 W 39th Street, Suite 700" , rooms: 155,
    # img1: "", img2: ""
}) # building_id: 5

Hotel.create({
    name: "Shonai Hotel Suiden Terrasse", country: "Japan", state: "", city: "Yamagata", address: "Kitakyoden Shimotorinosu 23-1", rooms: 135,
    # img1: "", img2: ""
}) # building_id: 6

Hotel.create({
    name: "The Edwin Hotel", country: "USA", state: "NY", city: "Chattanooga", address: "102 Walnut Street, Chattanooga, TN", rooms: 90,
    # img1: "", img2: ""
}) # building_id: 7

Hotel.create({
    name: "San Canzian Villiage & Hotel", country: "Croatia", state: "", city: "Buje", address: "Mužolini Donji 7, Buje", rooms: 24,
    # img1: "", img2: ""
}) # building_id: 8

Hotel.create({
    name: "Cervo Mountain Resort", country: "Switzerland", state: "", city: "Zermatt", address: "Riedweg 156, Postfach 388", rooms: 54,
    # img1: "", img2: ""
}) # building_id: 9

Hotel.create({
    name: "Hotel des Trois Vallees", country: "France", state: "", city: "Courchevel", address: "Rue Park City", rooms: 31,
    # img1: "", img2: ""
}) # building_id: 10

Hotel.create({
    name: "Forestis Dolomites", country: "Italy", state: "", city: "Plose", address: "39042 Bressanone Bolzano, ", rooms: 60,
    # img1: "", img2: ""
}) # building_id: 11

Hotel.create({
    name: "Higashiyama Niseko Village", country: "Japan", state: "", city: "Niseko", address: "Aza Soga 919-28", rooms: 50,
    # img1: "", img2: ""
}) # building_id: 12

Hotel.create({
    name: "Esiweni Luxury Safari Lodge", country: "South Africa", state: "", city: "Ladysmith", address: "Memorial Gate, Nambiti Game Reserve, ", rooms: 5,
    # img1: "", img2: ""
}) # building_id: 13

Hotel.create({
    name: "Las Casitas, Colca Canyon", country: "Peru", state: "Arequipa", city: "Yanque", address: "Parque Curiña s/n (Desvío carretera Yanque a Achoma)", rooms: 20,
    # img1: "", img2: ""
}) # building_id: 14

Hotel.create({
    name: "Hotel Awa", country: "Chile", state: "", city: "Puerto Varas", address: "Ruta 225, Km. 27", rooms: 16,
    # img1: "", img2: ""
}) # building_id: 15

Hotel.create({
    name: "Zannier Hotels Omaanda", country: "Namibia", state: "", city: "Windhoek East", address: "Omaanda Lodge, Farm n° 78", rooms: 10,
    # img1: "", img2: ""
}) # building_id: 16

## ************* ROOM SEEDS ************* ##
Room.destroy_all
Room.create({ room_type: "Deluxe Room", beds: "1 double/full bed" , occupancy: 2, size: "215 ft²/20 m²", building_id: 1 })
Room.create({ room_type: "Standard Room", beds: "2 Single Beds or 1 King Bed", occupancy: 2, size: "215 ft²/20 m²", building_id: 1 })

Room.create({ room_type: "Prestige Suite with Private Pool", beds: "1 King Bed", occupancy: 2, size: "807 ft²/75 m²", building_id: 2 })

Room.create({ room_type: "Muse", beds: "1 Queen Bed", occupancy: 2, size: "215 ft²/20 m²", building_id: 3 })
Room.create({ room_type: "Goddess Suite", beds: "2 double beds", occupancy: 4, size: "269 ft²/25 m²", building_id: 3 })
Room.create({ room_type: "Suite with Terrace", beds: "1 Double/Full Bed" , occupancy: 2, size: "430 ft²/40 m²", building_id: 3 })

Room.create({ room_type: "Glass Cottage", beds: "1 Queen Bed", occupancy: 2, size: "139 ft²/13 m²", building_id: 4 })
Room.create({ room_type: "Deluxe Suite Grove View", beds: "1 King Bed", occupancy: 2, size: "678 ft²/63 m²", building_id: 4 })

Room.create({ room_type: "Premium", beds: "2 Single Beds or 1 King Bed", occupancy: 2, size: "161 ft²/15 m²", building_id: 5 })
Room.create({ room_type: "Superior", beds: "2 Single Beds or 1 King Bed", occupancy: 2, size: "193 ft²/18 m²", building_id: 5 })
Room.create({ room_type: "Superior Triple", beds: "3 Single Beds or 1 Double & 1 Single Bed", occupancy: 3, size: "258 ft²/24 m²", building_id: 5 })

Room.create({ room_type: "Maisonette", beds: "2 Single Beds", occupancy: 4, size: "462 ft²/43 m²", building_id: 6})
Room.create({ room_type: "Triple Room", beds: "3 Single Beds", occupancy: 4, size: "312 ft²/29 m²", building_id: 6})

Room.create({ room_type: "Athena Suite", beds: "1 King Bed & 2 Double Beds", occupancy: 6, size: "1345 ft²/124 m²", building_id: 7})
Room.create({ room_type: "Hoyt House Deluxe Suite", beds: "1 King Bed", occupancy: 2, size: "635 ft²/58 m²", building_id: 7})
Room.create({ room_type: "Hoyt House Grand Suite", beds: "1 King Bed", occupancy: 2, size: "1228 ft²/114 m²", building_id: 7})

Room.create({ room_type: "Club Room", beds: "1 King Bed", occupancy: 2, size: "365 ft²/34 m²", building_id: 8})
Room.create({ room_type: "Club Suite", beds: "1 King Bed", occupancy: 2, size: "731 ft²/68 m²", building_id: 8})

Room.create({ room_type: "Volkshaus", beds: "1 King Bed", occupancy: 3, size: "355 ft²/33 m²", building_id: 9})
Room.create({ room_type: "Corvatsch Room", beds: "2 Single Beds or 1 King Bed", occupancy: 2, size: "269 ft²/25 m²", building_id: 9})

Room.create({ room_type: "Marquis Suite", beds: "1 King Bed", occupancy: 2, size: "861 ft²/79 m²", building_id: 10})
Room.create({ room_type: "Eiffel Suite", beds: "1 King Bed", occupancy: 2, size: "650 ft²/60 m²", building_id: 10})

Room.create({ room_type: "Arno River View", beds: "1 Queen Bed", occupancy: 2, size: "484 ft²/44 m²", building_id: 11})
Room.create({ room_type: "Superior Junior Suite", beds: "1 King Bed", occupancy: 4, size: "592 ft²/55 m²", building_id: 11})
Room.create({ room_type: "Grand Premium with View", beds: "1 King Bed", occupancy: 3, size: "355 ft²/33 m²", building_id: 11})
Room.create({ room_type: "Two Bedroom VIP Suite", beds: "1 Queen Bed", occupancy: , size: "914 ft²/85 m².", building_id: 11})

Room.create({ room_type: "Standard Wide + Balcony", beds: "1 Double/Full Bed", occupancy: 2, size: "247 ft²/23 m²", building_id: 12})
Room.create({ room_type: "Deluxe Palace Garden View", beds: "1 King Bed", occupancy: 2, size: "764 ft²/70 m²", building_id: 12})
Room.create({ room_type: "Susuki King", beds: "1 King Bed", occupancy: 2, size: "646 ft²/60 m²", building_id: 12})

Room.create({ room_type: "Alcoba", beds: "1 Queen Bed", occupancy: 2, size: "204 ft²/19 m²", building_id: 13})

Room.create({ room_type: "Aposento", beds: "2 Single Beds or 1 King Bed", occupancy: 2, size: "322 ft²/30 m².", building_id: 14})

Room.create({ room_type: "Dawn Room", beds: "2 Double Beds", occupancy: 3, size: "430 ft²/39 m²", building_id: 15})
Room.create({ room_type: "Bungalow", beds: "2 Single Beds", occupancy: 2, size: "484 ft²/45 m²", building_id: 15})
Room.create({ room_type: "Park Family Suite", beds: "1 Double & 2 Single Beds", occupancy: 5, size: "645 ft²/60 m²", building_id: 15})

Room.create({ room_type: "One Bedroom Tent", beds: "2 Single Beds or 1 King Bed", occupancy: 2, size: "42 ft²/3 m²", building_id: 16})
Room.create({ room_type: "Backyward Winetank Suite", beds: "1 King Bed", occupancy: 3, size: "322 ft²/30 m²", building_id: 16})


## ************* RESERVATION SEEDS ************* ##
Reservation.destroy_all
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