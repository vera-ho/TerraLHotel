class CreateFavorites < ActiveRecord::Migration[5.2]
  def change
    create_table :favorites do |t|
      t.integer :favoriter_id, null: false
      t.integer :favorited_id, null: false

      t.timestamps
    end

    add_index :favorites, :favoriter_id
    add_index :favorites, :favorited_id
  end
end