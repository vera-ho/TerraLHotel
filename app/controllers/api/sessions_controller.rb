class Api::SessionsController < ApplicationController
    def create
        @user = User.find_by_credentials(
            params[:user][:email], 
            params[:user][:password]
        )

        if @user.nil?
            # debugger
            flash.now[:errors] = ['Invalid email or password.']
        else
            # debugger
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
            # No user to log out
            render json: @user.errors.full_messages, status: 404
        end
    end
end
