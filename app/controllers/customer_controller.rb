class CustomerController < ApplicationController

  def create
    customer = Customer.new(customer_params)
    if customer.save
      render json: {}, status: 200
    else
      render json: {"Error"}, status: 422
    end
  end

  private

  def customer_params
    params.require(:customer).permit(:name)
  end
end
