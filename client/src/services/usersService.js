const url = 'http://localhost:5000/api/users'

export const getByUsername = (username) => {
    return fetch(url + `/${username}`)
    .then(res => res.json())
}

export const update = (id, username, imageUrl, token) => {
    let user = {
        username,
        imageUrl
    }
    
    return fetch(url + `/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(user)
    })
}