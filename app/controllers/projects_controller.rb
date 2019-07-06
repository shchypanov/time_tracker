class ProjectsController < ApplicationController

  def new
    @project = Project.new
  end

  def create
    @project = Project.new(project_params)
    respond_to do |format|
      if @project.name.present? && @project.save
          format.js {render :created}
        else
          format.js {render :created_error}
      end
    end
  end

  def destroy
    @project = Project.find(params[:id])
    respond_to do |format|
      if @project.destroy
        format.js {render :destroy}
      else
        format.js {render :destroy_error}
      end
    end
  end

  private

  def project_params
    params.require(:project).permit(:name, :customer_id)
  end

end
