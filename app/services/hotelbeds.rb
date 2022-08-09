module HotelBeds
    class Search
        def self.by_location(location)
            url = 'https://api.test.hotelbeds.com/hotel-api/1.0/status'
            # url = 'https://api.test.hotelbeds.com/hotel-content-api/1.0/hotels'
            xsignature = (ENV['API_KEY'] + ENV['SECRET'] + DateTime.now.strftime("%Q")).hash
            xsignature = xsignature.to_s
            console.log(xsignature)
            
            @response = HTTParty.get(
                url,
                headers: {
                    'api-key': ENV['API_KEY'],
                    'x-signature': xsignature,
                    "Content-Type": "application/json",
                    'accept': 'application/json', 
                    'accept-encoding': 'gzip'
                }
            )
        end

        def generateHash(str)
            str.hash
        end
      
    end
end