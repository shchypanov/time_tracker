class ApplicationController < ActionController::Base
  before_action :authenticate_user!

  before_action :user_admin, only: :admin

  def admin
  	@customer = Customer.new
  	@project = Project.new
    @customers = Customer.all
 
     #  if @customer.name.empty?
     # format.js {render :created}
     # else
     #   format.js {render :created_error}
    #  end

  end

  private

  def user_admin
    redirect_to root_path unless current_user.admin?
  end
end
