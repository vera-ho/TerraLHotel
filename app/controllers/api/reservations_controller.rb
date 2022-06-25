class Api::ReservationsController < ApplicationController

    # User can only view their own reservations when logged in (=> current_user)
    before_action :require_logged_in    # only: [:show, :create, :update, :destroy]

    def index
        @reservations = Reservation.find_by(customer_id: params[:customer_id])
        # @reservations = current_user.reservations
    end

    # NEST INDEX/SHOW UNDER USER???

    def show
        @reservation = Reservation.find_by(id: params[:id])
    end

    def create
        @reservation = Reservation.new(reservation_params)
        @reservation.customer_id = current_user.id
        # @reservation = current_user.reservations.new(reservation_params)
        if @reservation.save
            render :show
        else
            render json: ['Room could not be reserved. Please check your information and try again.'], status: 422
        end
    end

    def update
        @reservation = current_user.reservations.find_by(id: params[:id])

        if @reservation && @reservation.update(reservation_params)
            render :show
        else
            render json: ['Reservation could not be updated. Please check your information and try again.'], status: 422
        end
    end

    def destroy
        @reservation = current_user.reservations.find_by(id: params[:id])

        if @reservation && @reservation.delete
            render :index
        else
            render json: ['Something went wrong! Reservation could not be cancelled.'], status 422
        end
    end

    private
    def reservation_params
        params.require(:reservation).permit(:hotel_id, :customer_id, :room_id, :checkin, :checkout, :status)
    end
end
