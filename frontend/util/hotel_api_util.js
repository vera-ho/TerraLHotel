export const fetchAllHotels = () => {
    return $.ajax({
        method: "GET",
        url: "/api/hotels"
    })
}

// export const fetchHotel = hotel => {
//     return $.ajax({
//         method: "GET",
//         url: `/api/hotels/${hotel.id}`,
//     })
// }

export const fetchHotel = hotelId => {
    return $.ajax({
        method: "GET",
        url: `/api/hotels/${hotelId}`,
    })
}