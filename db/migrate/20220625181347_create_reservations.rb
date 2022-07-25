class CreateReservations < ActiveRecord::Migration[5.2]
  def change
    create_table :reservations do |t|
      t.integer :hotel_id, null:false
      t.integer :room_id, null:false
      t.integer :customer_id, null:false
      t.datetime :checkin, null:false
      t.datetime :checkout, null:false
      t.string :status, null:false

      t.timestamps
    end
    add_index :reservations, :hotel_id
    add_index :reservations, :customer_id
    add_index :reservations, :room_id
    add_index :reservations, :checkin
    add_index :reservations, :checkout
  end
end
