Rails.application.routes.draw do
	devise_for :users, path:'', path_names: {sign_in: 'login', sign_out: 'logout', sign_up: 'register' ,}

	devise_scope :user do 
		get "register", :to => "devise/registrations#new", as: :register 
		get "login", :to => "devise/sessions#new", as: :login
		get "logout", :to => "devise/sessions#destroy", as: :logout
	end
	
	get 'pages/home'
	get 'pages/about'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'pages#home'
end
