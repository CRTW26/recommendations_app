require 'sinatra/base'
require 'httparty'
require 'dotenv'
Dotenv.load

class App < Sinatra::Base

  before do 
    content_type :json
    headers 'Access-Control-Allow-Origin' => '*'
          #  'Access-Control-Allow-Origin' => ['OPTIONS', 'GET', 'POST']
  end 

  get '/recommendation' do 
    address= 'https://tastedive.com/api/similar?q='
    token = ENV['TOKEN']
    query = params[:q]
    url = "#{address}#{query}&#{token}"
    response = HTTParty.get(url)
    File.open('./recommendations.json', 'w') { |f| f.write response }
    File.read('./recommendations.json')
  end 

end 