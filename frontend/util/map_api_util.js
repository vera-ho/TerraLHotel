export const getLatLng = url => {
    return $.ajax({
        method: "GET",
        url: url,
    })
}