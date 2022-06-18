Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root to: 'static_pages#root'

#       Prefix Verb   URI Pattern                    Controller#Action
#         root GET    /                              static_pages#root
#    api_users POST   /api/users(.:format)           api/users#create {:default=>{:format=>:json}}
#     api_user GET    /api/users/:id(.:format)       api/users#show {:default=>{:format=>:json}}
#              PATCH  /api/users/:id(.:format)       api/users#update {:default=>{:format=>:json}}
#              PUT    /api/users/:id(.:format)       api/users#update {:default=>{:format=>:json}}
#  api_session DELETE /api/session(.:format)         api/sessions#destroy {:default=>{:format=>:json}}
#              POST   /api/session(.:format)         api/sessions#create {:default=>{:format=>:json}}

  namespace :api, default: { format: :json } do
    resources :users, only: [:show, :create, :update]
    resource :session, only: [:create, :destroy]
  end

end
