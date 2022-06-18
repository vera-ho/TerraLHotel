export const createUser = user => {
    return $.ajax({
        method: "POST",
        url: "/api/users",
        data: { user }
    })
}

export const updateUser = user => {
    return $.ajax({
        method: "PATCH",
        url: `/api/users/${user.id}`,
        data: { user }
    })
}