export const fetchAllHotels = () => {
    return $.ajax({
        method: "GET",
        url: "/api/hotels"
    })
}

export const fetchHotel = hotelId => {
    return $.ajax({
        method: "GET",
        url: `/api/hotels/${hotelId}`,
    })
}

export const searchHotels = searchParam => {
    return $.ajax({
        method: "GET", 
        url: "/api/hotels",
        data: { searchParam }
    })
}