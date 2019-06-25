Rails.application.routes.draw do
  get '/profile', to: 'application#profile'
  get '/admin', to: 'application#admin'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'application#home'
end
