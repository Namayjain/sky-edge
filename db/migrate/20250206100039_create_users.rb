class CreateUsers < ActiveRecord::Migration[8.0]
  def change
    create_table :users do |t|
      t.string :first_name
      t.string :last_name
      t.string :username
      t.string :email
      t.string :phone_number
      t.string :github
      t.string :linkedin
      t.string :twitter

      t.timestamps
    end
  end
end
