class CreateUsers < ActiveRecord::Migration[5.0]
  def change
    create_table :users do |t|
      t.string :name, null: false
      t.string :mail, null: false, unique: true
      t.string :image
      t.string :password, null: false, unique: true
      t.string :sex, null: false
      t.integer :birth_year, null: false
      t.integer :birth_month, null: false
      t.integer :birthday, null: false
      t.integer :postnum, null: false
      t.timestamps
    end
  end
end
