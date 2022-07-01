class CreateReviews < ActiveRecord::Migration[5.2]
  def change
    create_table :reviews do |t|
      t.integer :reviewed_hotel_id, null: false
      t.integer :reviewer_id, null: false
      t.integer :rating, null: false
      t.string :title, null: false
      t.text :body, null: false

      t.timestamps
    end
    add_index :reviews, :reviewed_hotel_id
    add_index :reviews, :reviewer_id
  end
end
