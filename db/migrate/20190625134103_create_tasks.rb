class CreateTasks < ActiveRecord::Migration[5.2]
  def change
    create_table :tasks do |t|
      t.integer :user_id
      t.integer :project_id
      t.time :start_time
      t.time :end_time
      t.string :description

      t.timestamps
    end
  end
end
