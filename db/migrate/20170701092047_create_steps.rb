class CreateSteps < ActiveRecord::Migration[5.0]
  def change
    create_table :steps do |t|
      t.string :step_image
      t.string :how_to, null: false
      t.integer :recipe_id, null: false, foreign_key: true
      t.timestamps
    end
  end
end
