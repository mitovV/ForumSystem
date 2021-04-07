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

export const create = (title, content, category, token) => {
    let post = {
        title,
        content,
        category
    }

    return fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(post)
    })
        .then(res => res.json())
}

export const update = (id, title, content, category, token) => {
    let post = {
        title,
        content,
        category
    }

    return fetch(url + `/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(post)
    })
        .then(res => res.json())
}