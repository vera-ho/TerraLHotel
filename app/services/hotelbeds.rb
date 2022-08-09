module HotelBeds
    class Search
      def self.by_location(location)
        url = 'https://api.test.hotelbeds.com/hotel-api/1.0/status'
        xsignature = generateHash(ENV['API_KEY'] + ENV['SECRET'] + DateTime.now.strftime("%Q"))
        puts xsignature
        
        HTTParty.get(
            url,
            headers: {
                'api-key': ENV['API_KEY'],
                'x-signature': xsignature,
                "Content-Type": "application/json",
            }
        )
      end

      def generateHash(str)
        str.hash
      end
    end
  end