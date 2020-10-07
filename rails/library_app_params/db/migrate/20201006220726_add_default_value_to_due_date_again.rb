class AddDefaultValueToDueDateAgain < ActiveRecord::Migration[6.0]
  def change
    change_column_default :rentals, :due_date, Date.tomorrow()
  end
end
