class SearchController < ApplicationController
  def index
      @response = HotelAPI::Search.all
  end
end
