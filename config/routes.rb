Rails.application.routes.draw do
  root 'recipes#index'
  get '/login' => 'sessions#new'
  post '/login' => 'sessions#create'
  delete '/logout' => 'sessions#destroy'
  resources :users, only: [:edit, :update, :new, :create]
  resources :recipes
  get '/recipes/search' => 'recipes#search'
  post '/recipes/search' => 'recipes#search'
end
