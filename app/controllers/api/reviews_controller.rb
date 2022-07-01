class Api::ReviewsController < ApplicationController

    before_action :require_logged_in, only: [:create, :update, :destroy]

    def index
        @reviews = Review.all
    end

    def show
        @review = Review.find_by(id: params[:id])
    end

    def create
        @review = Review.new(review_params)
        @review.reviewer_id = current_user.id

        if @review.save
            render :show
        else
            render json: ['Review could not be saved. Please try again.'], status: 422
        end
    end

    def update
        @review = current_user.reviews.find_by(id: params[:id])
        if @review && @review.update(review_params)
            render :show
        else
            render json: ['Review could not be updated. Please try again.'], status: 422
        end
    end

    def destroy
        @review = current_user.reviews.find_by(id: params[:id])
        if @review && @review.delete
            render json: [params[:id]], status: 200
        else
            render json: ['Something went wrong! Review could not be deleted'], status 422
        end
    end
end
