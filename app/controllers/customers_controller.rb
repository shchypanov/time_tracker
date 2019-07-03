class CustomersController < ApplicationController

  def create
    @customer = Customer.new(customer_params)
    respond_to do |format| 
      if @customer.save
      format.js {render :created}
      else
        format.js {render :created_error}
      end
    end
  end

  private

  def customer_params
    params.require(:customer).permit(:name)
  end
end
