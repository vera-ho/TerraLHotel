class CreateReservations < ActiveRecord::Migration[5.2]
  def change
    create_table :reservations do |t|
      t.integer :hotel_id
      t.integer :customer_id
      t.datetime :checkin
      t.datetime :checkout
      t.integer :room_id

      t.timestamps
    end
  end
end
