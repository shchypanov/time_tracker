class ProjectsController < ApplicationController

    def new
      @project = Project.new
    end

    def create
    project = Project.new(project_params)
    if @customer.name.present? && project.save
      format.js {render :created}
      else
      format.js {render :created_error}
    end
  end

  private

  def project_params
    params.require(:project).permit(:name, :customer_id)
  end

end
