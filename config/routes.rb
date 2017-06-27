Rails.application.routes.draw do
  root 'recipes#index'
  get '/login' => 'sessions#new'
  post '/login' => 'sessions#create'
  get '/logout' => 'sessions#delete' #動作確認用
  delete '/logout' => 'sessions#delete'
  resources :users, only: [:edit, :update, :new, :create]
  resources :recipes
  get '/recipes/search' => 'recipes#search'
  post '/recipes/search' => 'recipes#search'
end
