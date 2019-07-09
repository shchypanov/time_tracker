class AddCompanyIdToUsersAndProjects < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :company_id, :integer
    add_column :projects, :company_id, :integer
  end
end
