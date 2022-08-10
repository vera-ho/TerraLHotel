module Impala
  class Search
    def self.by_location(location)
      # puts "***** Impala API ******"
      url = 'https://sandbox.impala.travel/v1/hotels'
      HTTParty.get(
          url,
          headers: {
              'x-api-key': ENV['API_KEY'],
              "Content-Type": "application/json",
          }
      )
    end
  end
end