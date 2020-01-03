Rails.application.routes.draw do

  namespace :com do
    namespace :assurance do
      get 'boggle/index'
      get 'boggle/test'
      get 'boggle/lettersForBoard'
      post 'boggle/wordValidator'
    end
  end

  namespace :api do
    namespace :v1 do
      get 'recipes/index'
      post 'recipes/create'
      get '/show/:id', to: 'recipes#show'
      delete '/destroy/:id', to: 'recipes#destroy'
    end
  end

  root controller:'com/assurance/boggle', action:'index'
  get '/boggle/test' => 'com/assurance/boggle#test'
  get '/boggle' => 'com/assurance/boggle#index'
  get '/boggle/play' => 'com/assurance/boggle#play'


  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
