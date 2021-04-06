const url = 'http://localhost:5000/api/users'

export const getByUsername = (username) => {
    return fetch(url + `/${username}`)
    .then(res => res.json())
}