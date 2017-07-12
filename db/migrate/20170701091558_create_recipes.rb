class CreateRecipes < ActiveRecord::Migration[5.0]
  def change
    create_table :recipes do |t|
      t.string :name, null: false
      t.string :dish_image, null: false
      t.string :catch_copy, null: false
      t.string :history, null: false
      t.string :tip
      t.integer :user_id, null: false, foreign_key: true
      t.timestamps
    end
  end
end
