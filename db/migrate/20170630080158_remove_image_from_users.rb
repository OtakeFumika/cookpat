class RemoveImageFromUsers < ActiveRecord::Migration[5.0]
  def up
    remove_column :users, :image
  end

  def down
    add_column :users, :image, :string
  end
end
