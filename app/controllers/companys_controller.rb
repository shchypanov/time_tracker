class CompanysController < ApplicationController


  def new
    @company = Company.new
  end

  def create
    @company = Company.new(company_params)
    respond_to do |format|
      if @company.name.present? && @company.save
        format.js {render :created}
      else
        format.js {render :created_error}
      end
  end

      private

      def company_params
        params.require(:company).permit(:name)
      end

end
