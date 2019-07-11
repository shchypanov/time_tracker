Rails.application.routes.draw do
  devise_for :users
  resources :customers
  resources :projects
  resources :tasks
  resources :companies

  get '/profile', to: 'application#profile'
  get '/admin', to: 'application#admin'
  get '/my_tasks', to: 'application#my_tasks'
  # devise_for :users, controllers: { registrations: 'users/registrations' }
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  devise_scope :user do
    get 'sign_up', to: 'users/registrations#new'
    authenticated  do
      root to: 'application#profile'
    end

    unauthenticated do
      root to: 'devise/sessions#new', as: 'unauthenticated_root'
    end
  end
end
