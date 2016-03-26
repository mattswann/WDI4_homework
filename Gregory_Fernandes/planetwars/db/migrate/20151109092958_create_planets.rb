class CreatePlanets < ActiveRecord::Migration
  def change
    create_table :planets do |t|
      t.string :name
      t.text :image_url

      t.timestamps null: false
    end
  end
end
