class ProjectsController < ApplicationController

    def new
      @project = Project.new
    end

    def create
    project = Project.new(project_params)
    if project.save
      render json: {}, status: 200
    else
      render json: {message: "Error"}, status: 422
    end
  end

  private

  def project_params
    params.require(:project).permit(:name, :customer_id)
  end

end
