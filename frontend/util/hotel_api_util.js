import * as createHash from 'js-sha256';

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

//  For use with API calls
export const generateHash = string => {
    return createHash.create(string).hex();
}

export const apiRequestHotels = () => {
    const seconds = new Date().getTime() / 1000;
    console.log(seconds)
    console.log(ENV[HOTELBED_API_KEY])
    console.log(ENV[HOTELBED_SECRET])
    const xsignature = generateHash(ENV[HOTELBED_API_KEY] + ENV[HOTELBED_SECRET] + seconds);
    console.log(xsignature)

    return $.ajax({
        method: "GET",
        url: `https://api.test.hotelbeds.com/hotel-api/1.0/status`,
        headers: {
            "Accept": "application/json",
            "Api-key": ENV[HOTELBED_API_KEY],
            "X-Signature": xsignature
        }
    })
}