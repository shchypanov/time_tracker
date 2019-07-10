class TasksController < ApplicationController

  def new
    @task = Task.new
    respond_to do |format|
      format.js {render :new}
    end
  end

  def create
    @task = current_user.tasks.new(task_params)
    respond_to do |format|
      if @task.description.present? && @task.save
        format.js {render :created}
      else
        format.js {render :created_error}
      end
    end
  end

  private

  def task_params
    params.require(:task).permit(:project_id, :description, :start_time)
  end

end
