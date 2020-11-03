class TasksController < ApplicationController
  def new
    @task = Task.new
    @project = Project.find(params[:project_id])
  end

  def edit
    @task = Task.find(params[:id])
  end

  def create
    @project = Project.find(params[:project_id])
    @task = @project.tasks.create(task_params)
    #redirect_to project_path(@project)
    redirect_to projects_index_url
  end

  def update
    @task = Task.find(params[:id])

    if @task.update(task_params)
      redirect_to projects_path
    else
      render 'edit'
    end
  end

  def destroy
    @task = Task.find(params[:id])
    @task.destroy

    redirect_to projects_path
  end

  private
    def task_params
      params.require(:task).permit(:name, :status)
    end
end
