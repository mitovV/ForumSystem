const url = 'http://localhost:5000/api/posts'

export const getById = (id) => {
    return fetch(url + `/${id}`)
        .then(res => res.json())
        .catch(err => console.log(err))
}
