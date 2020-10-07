class AddDefaultValueToCurrentDateAgain < ActiveRecord::Migration[6.0]
  def change
    change_column_default :rentals, :date, Date.today()
  end
end
