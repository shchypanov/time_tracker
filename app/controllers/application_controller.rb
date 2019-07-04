class ApplicationController < ActionController::Base
  before_action :authenticate_user!

  before_action :user_admin, only: :admin

  def admin
<<<<<<< HEAD
      @project = Project.new
      @customer = Customer.new
=======
  	@customer = Customer.new
  	@project = Project.new
    @customers = Customer.all
    @projects = Project.all
    @customer_for_select = Customer.all.map{|c| [c.name, c.id ]}
>>>>>>> f2d2c3aa6354fea94a57bd0f289eadbe150fe15f
  end

  private

  def user_admin
    redirect_to root_path unless current_user.admin?
  end
end
 