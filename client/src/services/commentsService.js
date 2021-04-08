const url = 'http://localhost:5000/api/comments'

export const getCommentsByParentAndPostId = (postId, parentId) => {
    if(!parentId){
        return fetch(url + `/${postId}`)
        .then(res => res.json())
        .catch(console.log)
    }

    return fetch(url + `/${postId}/${parentId}`)
        .then(res => res.json())
        .catch(console.log)
}

export const crate = (postId, parentId, content, token ) => {
    let data = {
        postId,
        parentId,
        content
    }

    return fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(data)
    })
}

export const getById = (id) => {
    return fetch(url + `/${id}/one`)
    .then(res => res.json())
    .catch(err => console.log(err))
}

export const update = (id, content, token) => {
    let comment = {
        content
    }
    
    return fetch(url + `/${id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify(comment)
    })
        .then(res => res.json())
}

export const deleteById = (id, token) => {
    return fetch(url + `/${id}`, {
        method: 'DELETE',
        headers: {
            'Authorization': `Bearer ${token}`
        },
    })
}