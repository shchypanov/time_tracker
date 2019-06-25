Rails.application.routes.draw do
  get '/profile', to: 'application#profile'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'application#home'

  get '/my_tasks', to: 'application#my_tasks'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

end
