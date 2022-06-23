# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
demo = User.create({
    fname: "demo",
    lname: "user",
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

# Room.destroy_all
# r1 = Room.create({
#     name: "", bed_type: "", num_beds: 
# })
