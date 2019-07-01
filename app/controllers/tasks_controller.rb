class TasksController < ApplicationController

  def create
    task = Task.new(task_params)
  if customer.save
    render json: {}, status: 200
  else
    render json: {message: "Error"}, status: 422
  end


  private

  def task_params
    params.require(:task).permit(:project_id, :description, :start_time)
  end
  end

end
