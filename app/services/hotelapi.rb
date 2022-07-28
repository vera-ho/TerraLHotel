module HotelAPI
    class Search
        def self.all
          HTTParty.get('https://sandbox.impala.travel/v1/hotels')
        end
      end    
end