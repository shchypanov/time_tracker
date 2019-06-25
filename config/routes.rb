Rails.application.routes.draw do

  resources :customers
  
  get '/profile', to: 'application#profile'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'application#home'
end
