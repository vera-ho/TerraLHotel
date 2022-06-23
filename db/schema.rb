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

ActiveRecord::Schema.define(version: 2022_06_23_201522) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "hotels", force: :cascade do |t|
    t.string "name", null: false
    t.string "email", null: false
    t.string "phone_number", null: false
    t.string "country", null: false
    t.string "city", null: false
    t.string "address", null: false
    t.integer "rooms", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["city"], name: "index_hotels_on_city"
    t.index ["country"], name: "index_hotels_on_country"
    t.index ["email"], name: "index_hotels_on_email"
    t.index ["name"], name: "index_hotels_on_name"
  end

  create_table "rooms", force: :cascade do |t|
    t.string "name"
    t.string "type", null: false
    t.integer "occupancy", null: false
    t.string "size"
    t.string "beds", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "building_id"
    t.index ["beds"], name: "index_rooms_on_beds"
    t.index ["building_id"], name: "index_rooms_on_building_id"
    t.index ["occupancy"], name: "index_rooms_on_occupancy"
    t.index ["type"], name: "index_rooms_on_type"
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
