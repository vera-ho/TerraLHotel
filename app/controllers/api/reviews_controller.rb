class Api::ReviewsController < ApplicationController

    before_action :require_logged_in, only: [:create, :update, :destroy]

    def create
        @review = Review.new(review_params)
        @review.reviewer_id = current_user.id

        if @review.save
            render @review
        else
            render json: ['Review could not be saved. Please try again.'], status: 422
        end
    end

    def update
        @review = current_user.reviews.find_by(id: params[:id])
        if @review && @review.update(review_params)
            render @review
            # render json: ['Successfully updated'], status: 200
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
