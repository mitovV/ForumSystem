const url = 'http://localhost:5000/api/posts'

export const getById = (id) => {
    return fetch(url + `/${id}`)
        .then(res => res.json())
        .catch(err => console.log(err))
}

export const getCommentsCount = (id) => {
    return fetch(url + `/${id}/comments`)
        .then(res => res.json())
        .catch(err => console.log(err))
}