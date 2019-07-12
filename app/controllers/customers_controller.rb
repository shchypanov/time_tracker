class CustomersController < ApplicationController

  before_action :set_customer, only: [:edit, :update, :destroy]

  def create

    @customer = Customer.new(customer_params)
    respond_to do |format|
      if @customer.name.present? && @customer.save
        format.js {render :created}
      else
        format.js {render :created_error}
      end

    end
  end

  def edit
    respond_to do |format|
      format.js {render :edited}
    end
  end

  def update
    @customer.update(customer_params)
    respond_to do |format|
      format.js {render :updated}
    end
  end

  def destroy
    respond_to do |format|
      if @customer.destroy
        # Project.where(customer_id: params[:id]).destroy_all
        format.js {render :destroyed}
      else
        format.js {render :destroyed_error}
      end
    end
  end

  private

  def customer_params
    params.require(:customer).permit(:name)
  end

  def set_customer
    @customer = Customer.find(params[:id])
  end

end
