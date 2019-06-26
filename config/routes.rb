Rails.application.routes.draw do
  devise_for :users
  resources :customers
  resources :projects
  resources :tasks

  get '/profile', to: 'application#profile'
  get '/admin', to: 'application#admin'
  get '/my_tasks', to: 'application#my_tasks'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  devise_scope :user do
    authenticated  do
      root to: 'application#profile'
    end

    unauthenticated do
      root to: 'devise/sessions#new', as: 'unauthenticated_root'
  end
  end
  end
