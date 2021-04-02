const url = 'http://localhost:5000/api/comments/'

export const getCommentsByparentId = (id) => {
    return fetch(url + id)
        .then(res => res.json())
        .catch(console.log)
}