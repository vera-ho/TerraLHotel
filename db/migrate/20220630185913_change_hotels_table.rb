class ChangeHotelsTable < ActiveRecord::Migration[5.2]
  def change
    remove_column :hotels, :email
    remove_column :hotels, :phone_number
    add_column :hotels, :img1, :string, default: ""
    add_column :hotels, :img2, :string, default: ""
    add_column :hotels, :img3, :string, default: ""
    add_column :hotels, :state, :string, default: ""

    remove_column :rooms, :name
    add_column :rooms, :img1, :string, default: ""
  end
end
