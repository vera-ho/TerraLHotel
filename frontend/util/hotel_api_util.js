import * as createHash from 'js-sha256';

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

export const hotelBedsAPI = () => {
    
}

//  For use with API calls
// export const generateHash = string => {
//     return createHash.create(string).hex();
// }

// export const apiRequestHotels = () => {
//     const seconds = new Date().getTime() / 1000;
//     const key = window.HOTELBED_API_KEY + window.HOTELBED_SECRET + seconds;
//     const xsignature = generateHash(key);

//     return $.ajax({
//         method: "GET",
//         url: `https://api.test.hotelbeds.com/hotel-api/1.0/status`,
//         headers: {
//             "Content-Type": "application/json",
//             "Api-key": window.HOTELBED_API_KEY,
//             "X-Signature": xsignature,
//             "Access-Control-Allow-Origin": "*",
//             'Access-Control-Allow-Headers': 'Content-Type, Authorization'
//         }
//     })
// }

// export const impalaRequestHotels = () => {
//     return $.ajax({
//         method: "GET",
//         url: `https://sandbox.impala.travel/v1/hotels`,
//         headers: {
//             "Content-Type": "application/json",
//             "x-api-key": window.IMPALA_API_KEY,
//             "Access-Control-Allow-Origin": "*",
//             'Access-Control-Allow-Headers': 'Content-Type, Authorization'
//         }

// })
// }