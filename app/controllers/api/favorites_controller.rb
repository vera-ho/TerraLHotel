class Api::FavoritesController < ApplicationController
    # before_action :require_logged_in

    def create
        @favorite = Favorite.new(favorite_params)

        if @favorite.save
            render @favorite
        else
            render json: @favorite.errors.full_messages, status: 422
        end
    end

    def destroy
        @favorite = current_user.favorites.find_by(id: params[:id])
        if @favorite && @favorite.delete
            render json: @favorite.id
        else 
            render json: @favorite.errors.full_messages, status: 422
        end
    end

    private
    def favorite_params
        params.require(:favorite).permit(:favoriter_id, :favorited_id)
    end
end
