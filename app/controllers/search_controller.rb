class SearchController < ApplicationController
    def index
        # if params['location']
        #     # @response = Impala::Search.by_location(params['location'])
        #     @response = HotelBeds::Search.by_location(params['location'])
        # end

        url = 'https://api.test.hotelbeds.com/hotel-api/1.0/status'
        xsignature = (ENV['API_KEY'] + ENV['SECRET'] + DateTime.now.strftime("%Q")).hash
        puts xsignature
        @response = HTTParty.get(
            url,
            headers: {
                'api-key': ENV['API_KEY'],
                'x-signature': '#{xsignature}',
                "Content-Type": "application/json",
            }
        )
    end
end
