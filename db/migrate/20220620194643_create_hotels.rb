class CreateHotels < ActiveRecord::Migration[5.2]
  def change
    create_table :hotels do |t|
      t.string :name, null: false, unique: true
      t.string :email, null: false, unique: true
      t.string :phone_number, null: false, unique: true
      t.string :country, null: false
      t.string :city, null: false
      t.string :address, null: false
      t.integer :rooms, null: false

      t.timestamps
    end
    
    add_index :hotels, :name
    add_index :hotels, :email
    add_index :hotels, :country
    add_index :hotels, :city
  end
end
