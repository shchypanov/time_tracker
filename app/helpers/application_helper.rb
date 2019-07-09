module ApplicationHelper
  def show_link_to_admin_panel?
    current_user.admin?
  end
end
