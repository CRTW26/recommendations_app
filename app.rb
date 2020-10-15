require 'sinatra/base'
require 'httparty'
require 'dotenv'

class App < Sinatra::Base

  before do 
    content_type :json
    headers 'Access-Control-Allow-Origin' => '*'
          #  'Access-Control-Allow-Origin' => ['OPTIONS', 'GET', 'POST']
  end 

  get '/' do 
    'hello'
  end 

end 