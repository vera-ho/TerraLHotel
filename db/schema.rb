# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2022_07_29_133057) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "favorites", force: :cascade do |t|
    t.integer "favoriter_id", null: false
    t.integer "favorited_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["favorited_id", "favoriter_id"], name: "index_favorites_on_favorited_id_and_favoriter_id", unique: true
    t.index ["favorited_id"], name: "index_favorites_on_favorited_id"
    t.index ["favoriter_id"], name: "index_favorites_on_favoriter_id"
  end

  create_table "hotels", force: :cascade do |t|
    t.string "name", null: false
    t.string "country", null: false
    t.string "city", null: false
    t.string "address", null: false
    t.integer "rooms", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "img1", default: ""
    t.string "img2", default: ""
    t.string "img3", default: ""
    t.string "state", default: ""
    t.index ["city"], name: "index_hotels_on_city"
    t.index ["country"], name: "index_hotels_on_country"
    t.index ["name"], name: "index_hotels_on_name"
  end

  create_table "reservations", force: :cascade do |t|
    t.integer "hotel_id", null: false
    t.integer "room_id", null: false
    t.integer "customer_id", null: false
    t.datetime "checkin", null: false
    t.datetime "checkout", null: false
    t.string "status", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["checkin"], name: "index_reservations_on_checkin"
    t.index ["checkout"], name: "index_reservations_on_checkout"
    t.index ["customer_id"], name: "index_reservations_on_customer_id"
    t.index ["hotel_id"], name: "index_reservations_on_hotel_id"
    t.index ["room_id"], name: "index_reservations_on_room_id"
  end

  create_table "reviews", force: :cascade do |t|
    t.integer "reviewed_hotel_id", null: false
    t.integer "reviewer_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.text "pros", null: false
    t.text "cons", default: ""
    t.index ["reviewed_hotel_id"], name: "index_reviews_on_reviewed_hotel_id"
    t.index ["reviewer_id"], name: "index_reviews_on_reviewer_id"
  end

  create_table "rooms", force: :cascade do |t|
    t.string "room_type", null: false
    t.integer "occupancy", null: false
    t.string "size"
    t.string "beds", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "building_id"
    t.string "img1", default: ""
    t.index ["beds"], name: "index_rooms_on_beds"
    t.index ["building_id"], name: "index_rooms_on_building_id"
    t.index ["occupancy"], name: "index_rooms_on_occupancy"
    t.index ["room_type"], name: "index_rooms_on_room_type"
  end

  create_table "users", force: :cascade do |t|
    t.string "email", null: false
    t.string "password_digest", null: false
    t.string "session_token", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "fname", null: false
    t.string "lname", null: false
    t.index ["email"], name: "index_users_on_email"
    t.index ["fname"], name: "index_users_on_fname"
    t.index ["lname"], name: "index_users_on_lname"
    t.index ["session_token"], name: "index_users_on_session_token"
  end

end
