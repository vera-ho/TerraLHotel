class AddForeignKeyToRooms < ActiveRecord::Migration[5.2]
  def change
    add_column :rooms, :building_id, :integer
    add_index :rooms, :building_id
  end
end
