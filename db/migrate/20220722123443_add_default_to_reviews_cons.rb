class AddDefaultToReviewsCons < ActiveRecord::Migration[5.2]
  def change
    change_column :reviews, :cons, :text, default: ""
  end
end
