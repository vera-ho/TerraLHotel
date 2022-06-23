class CreateRooms < ActiveRecord::Migration[5.2]
  def change
    create_table :rooms do |t|
      t.string :name
      t.string :type, null: false
      t.integer :occupancy, null:false
      t.string :size
      t.string :beds, null: false

      t.timestamps
    end
    add_index :rooms, :type
    add_index :rooms, :occupancy
    add_index :rooms, :beds
  end
end
