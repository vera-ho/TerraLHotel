class Api::ReviewsController < ApplicationController

    before_action :require_logged_in, only: [:create, :update, :destroy]

    # index and show may not be needed since json.jbuilder grabs reviews as part of the user's and hotel's show

    # list all reviews for specific hotel
    def index
        @reviews = Review.all
        # @reviews = Review.find_by(reviewed_hotel_id: params[:reviewed_hotel_id])
    end

    # list all reviews for specific user
    def show
        @review = Review.find_by(id: params[:id])
        # @reviews = Review.find_by(reviewer_id: params[:reviewer_id])
    end

    def create
        @review = Review.new(review_params)
        @review.reviewer_id = current_user.id

        if @review.save
            # render :show
            render json: ['Successfully created'], status: 200
        else
            render json: ['Review could not be saved. Please try again.'], status: 422
        end
    end

    def update
        @review = current_user.reviews.find_by(id: params[:id])
        if @review && @review.update(review_params)
            # render :show
            render json: ['Successfully updated'], status: 200
        else
            render json: ['Review could not be updated. Please try again.'], status: 422
        end
    end

    def destroy
        @review = current_user.reviews.find_by(id: params[:id])
        if @review && @review.delete
            render json: ['Review successfully deleted'], status: 200
        else
            render json: ['Something went wrong! Review could not be deleted'], status: 422
        end
    end

    private
    def review_params
        params.require(:review).permit(:reviewer_id, :reviewed_hotel_id, :pros, :cons)
    end
end
