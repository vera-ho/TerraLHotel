class ChangeUsernameToFirstAndLastName < ActiveRecord::Migration[5.2]
  def change
    remove_column :users, :username, :string

    add_column :users, :fname, :string
    add_column :users, :lname, :string

    add_index :users, :fname
    add_index :users, :lname
  end
end
