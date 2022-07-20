class ChangeReviewsBodyContent < ActiveRecord::Migration[5.2]
  def change
    remove_column :reviews, :body
    add_column :reviews, :pros, :text, null: false
    add_column :reviews, :cons, :text
  end
end
