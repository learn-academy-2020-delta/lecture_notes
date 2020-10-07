class ChangeDefaultBackForDate < ActiveRecord::Migration[6.0]
  def change
    change_column_default :rentals, :date, { expr: "('now'::text)::date" }
  end
end
