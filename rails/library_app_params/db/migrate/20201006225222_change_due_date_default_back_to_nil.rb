class ChangeDueDateDefaultBackToNil < ActiveRecord::Migration[6.0]
  def change
    change_column_default :rentals, :due_date, nil
  end
end
