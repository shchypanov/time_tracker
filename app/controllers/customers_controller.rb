class CustomersController < ApplicationController

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
    @customer = Customer.find(params[:id])
    respond_to do |format|
      format.js {render :edited}
    end
  end

  def update
    @customer = Customer.find(params[:id])
    @customer.update(customer_params)
    redirect_to admin_path
  end

  def destroy
    @customer = Customer.find(params[:id])
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
end
