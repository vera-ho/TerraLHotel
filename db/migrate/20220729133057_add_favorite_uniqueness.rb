class AddFavoriteUniqueness < ActiveRecord::Migration[5.2]
  def change
    add_index :favorites, [:favorited_id, :favoriter_id], unique: true
  end
end
