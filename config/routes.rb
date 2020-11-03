Rails.application.routes.draw do
  get 'projects/index'
  root 'projects#index'
  patch '/projects/:id/tasks/:id/edit', controller: 'tasks', action: :update

  resources :projects do
    resources :tasks
  end
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
