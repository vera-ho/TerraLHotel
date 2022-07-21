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

json.reviews do
    reviews = @user.reviews
    reviews.each do |review|
        user = review.reviewer
        json.set! review.id do
            json.partial! 'api/reviews/review', review: review
            json.reviewer do
                json.extract! user, :fname, :lname, :email
            end
        end
    end
end