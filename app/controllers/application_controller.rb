class ApplicationController < ActionController::Base
  before_action :authenticate_user!

  before_action :user_admin, only: :admin

  def admin
      @project = Project.new
      @customer = Customer.new
  end

  private

  def user_admin
    redirect_to root_path unless current_user.admin?
  end
end
