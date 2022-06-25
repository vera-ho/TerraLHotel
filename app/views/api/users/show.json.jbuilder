# json.partial! '/api/users/user', user: @user

json.user do
    json.partial! '/api/users/user', user: @user
end

json.reservations do
    reservations = @user.reservations
    reservations.each do |reservation|
        json.set! reservation.id do
            json.partial! '/api/reservations/reservation', reservation: reservation
        end
    end
end