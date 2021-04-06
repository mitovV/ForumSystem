const url = 'http://localhost:5000/api/auth'

export const register = (username, password, pictureUrl) => {
    let user = {
        username,
        password,
        pictureUrl
    }

    return fetch(url + '/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    })
}

export const login = (username, password) => {
    let user = {
        username,
        password,
    }

    return fetch(url + '/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    })
        .then(res => res.json())
        .catch(console.error)
}