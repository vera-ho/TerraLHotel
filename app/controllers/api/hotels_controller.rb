class Api::HotelsController < ApplicationController
    # def index
    #     @hotels = Hotel.all
    #     render :index
    # end

    def index
        if(params[:searchParam])
            @hotels = Hotel.where("name ILIKE ? OR city ILIKE ? OR country ILIKE ? or state ILIKE ?", "%#{params[:searchParam]}%", "%#{params[:searchParam]}%", "%#{params[:searchParam]}%", "%#{params[:searchParam]}%")
        else
            @hotels = Hotel.all
        end
        render :index
    end

    def show
        @hotel = Hotel.find_by(id: params[:id])
        render :show
    end

    private
    def hotel_params
        # only searchable by name, country, state, city
        params.require(:hotel).permit(:name, :country, :state, :city)
    end
end
