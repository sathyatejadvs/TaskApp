Rails.application.routes.draw do

  resources :tasks
  get 'user/show'
  get 'user/edit'
  get 'user/update'
	devise_for :users, path:'', path_names: {sign_in: 'login', sign_out: 'logout', sign_up: 'register' ,}

	get 'pages/home'
	get 'pages/dashboard'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'pages#dashboard'
end
