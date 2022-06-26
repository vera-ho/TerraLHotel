export const fetchAllReservations = () => {
    return $.ajax({
        method: "GET",
        url: "/api/reservations"
    })
}

export const fetchReservation = reservationId => {
    return $.ajax({
        method: "GET",
        url: `/api/reservations/${reservationId}`
    })
}

export const createReservation = reservation => {
    return $.ajax({
        method: "POST",
        url: "/api/reservations",
        data: { reservation }
    })
}

export const updateReservation = reservation => {
    return $.ajax({
        method: "POST",
        url: `/api/reservations/${reservation.id}`,
        data: { reservation }
    })
}

export const deleteReservation = reservationId => {
    return $.ajax({
        method: "POST",
        url: `/api/reservations/${reservationId}`
    })
}