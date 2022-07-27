class SearchController < ApplicationController
  def index
    if params['location']
      @response = HotelAPI::Search.all
    end
  end
end
