export const selectAllHotels = state => {
    return Object.values(state.entities.hotels);
}