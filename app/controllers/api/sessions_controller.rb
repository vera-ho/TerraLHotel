class Api::SessionsController < ApplicationController
    def create
        @user = User.find_by_credentials(
            params[:user][:email], 
            params[:user][:password]
        )

        if @user.nil?
            render json: ['Your email or password was incorrect, please try again.'], status: 422
        else
            login!(@user)
            render "/api/users/show"
            # render 'api/account'
            # render the last page they were on prior to login?
        end
    end

    def destroy
        if current_user
            logout!
            render json: {}
            # render '/'
        else
            render json: @user.errors.full_messages, status: 404
        end
    end
end
