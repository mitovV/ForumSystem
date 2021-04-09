const url = 'http://localhost:5000/api/users'

export const getByUsername = (username) => {
    return fetch(url + `/${username}`)
    .then(res => res.json())
}

export const update = (id, username, imageUrl, password, token) => {
    let user = {
        username,
        imageUrl,
        password
    }
    
    return fetch(url + `/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(user)
    })
    .then(res => res.json())
}

export const deleteProfile = (id, token) => {
    return fetch(url + `/${id}`, {
        method: 'DELETE',
        headers: {
            'Authorization': `Bearer ${token}`
        },
    })
}