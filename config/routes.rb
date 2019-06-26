Rails.application.routes.draw do
  devise_for :users
  get '/profile', to: 'application#profile'
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
