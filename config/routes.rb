Rails.application.routes.draw do
  root 'recipes#index'
  get '/login' => 'sessions#new'
  post '/login' => 'sessions#create'
  get '/logout' => 'sessions#destroy' #動作確認用
  delete '/logout' => 'sessions#destroy'
  resources :users, only: [:edit, :update, :new, :create]
  get '/users/:id/mail/edit' => 'users#mail_edit'
  post '/users/:id/mail/edit' => 'users#mail_update'
  get '/users/:id/change_password' => 'users#password_edit'
  post '/users/:id/change_password' => 'users#password_update'
  resources :recipes
  get '/recipes/search' => 'recipes#search'
  post '/recipes/search' => 'recipes#search'
end
