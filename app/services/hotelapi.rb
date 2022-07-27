module HotelAPI
    class Search
        def self.all
          HTTParty.get 'https://api.openweathermap.org/data/2.5/weather?q=' + '&appid=' + ENV['API_KEY']
        end
      end    
end