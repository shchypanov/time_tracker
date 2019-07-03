class ApplicationController < ActionController::Base
  before_action :authenticate_user!

  before_action :user_admin, only: :admin

  def admin
  	@customer = Customer.new
  	@project = Project.new
    @customers = Customers.all
    @project = Project.all 

  end

  private

  def user_admin
    redirect_to root_path unless current_user.admin?
  end
end
