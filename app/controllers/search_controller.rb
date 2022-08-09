class SearchController < ApplicationController
    def index
        if params['location']
            @response = Impala::Search.by_location(params['location'])
        end
    end
end
