class CustomersController < ApplicationController

  def create
<<<<<<< HEAD
    customer = Customer.new(customer_params)
    if customer.save
      render json: {message: "Customer saved"}, status: 200
    else
      render json: {message: "Error"}, status: 422
=======
    @customer = Customer.new(customer_params)
    respond_to do |format| 
      if @customer.name.present? && @customer.save
        format.js {render :created}
      else
        format.js {render :created_error}
      end
>>>>>>> f2d2c3aa6354fea94a57bd0f289eadbe150fe15f
    end
  end



  private

  def customer_params
    params.require(:customer).permit(:name)
  end
end
