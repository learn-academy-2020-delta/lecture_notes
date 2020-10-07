Rails.application.routes.draw do
  get 'rentals' => 'rentals#index', as: 'rentals'
  get 'rentals/new' => 'rentals#new', as: 'new_rental'
  get 'rentals/:id' => 'rentals#show', as: 'rental'
  get 'rentals/:id/edit' => 'rentals#edit', as: 'edit_rental'
  patch 'rentals/:id' => 'rentals#update'
  post 'rentals' => 'rentals#create'
end
