export const createUser = user => {
    return $.ajax({
        method: "POST",
        url: "/api/users",
        data: { user }
    })
}

export const showUser = userId => {
    return $.ajax({
        method: "GET",
        url: `/api/users/${userId}`
    })
}

export const updateUser = user => {
    return $.ajax({
        method: "PATCH",
        url: `/api/users/${user.id}`,
        data: { user }
    })
}