const url = 'http://localhost:5000/api/categories'

export const getAll = () => {
    return fetch(url)
        .then(res => res.json())
        .catch(err => console.log(err))
}

export const getOne = (id) => {
    return fetch(url + `/${id}`)
        .then(res => res.json())
        .catch(err => console.log(err))
}

export const getPostsCount  = (id) => {
    return fetch(url + `/${id}/posts/count`)
        .then(res => res.json())
        .catch(err => console.log(err))
}