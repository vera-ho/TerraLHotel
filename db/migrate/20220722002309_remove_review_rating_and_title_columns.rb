class RemoveReviewRatingAndTitleColumns < ActiveRecord::Migration[5.2]
  def change
    remove_column :reviews, :title
    remove_column :reviews, :rating
  end
end
