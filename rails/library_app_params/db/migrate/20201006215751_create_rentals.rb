class CreateRentals < ActiveRecord::Migration[6.0]
  def change
    create_table :rentals do |t|
      t.string :title
      t.date :date
      t.date :due_date

      t.timestamps
    end
  end
end
