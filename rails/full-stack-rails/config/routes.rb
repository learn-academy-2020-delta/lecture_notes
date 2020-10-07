# ROUTES

Rails.application.routes.draw do
  get 'herbs' => 'herb#index', as: 'herbs'
  get 'herbs/new' => 'herb#new', as: 'new_herb'
  post 'herbs' => 'herb#create'
  get 'herbs/:id' => 'herb#show', as: 'herb'
  get 'herbs/:id/edit' => 'herb#edit', as: 'edit_herb'
  patch 'herbs/:id' => 'herb#update'
  delete 'herbs/:id' => 'herb#destroy', as: 'delete_herb'
end
