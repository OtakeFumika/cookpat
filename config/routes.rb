Rails.application.routes.draw do
  root 'recipes#index'
  resources :users, only: [:edit, :update, :new, :create]
  resources :recipes
end
