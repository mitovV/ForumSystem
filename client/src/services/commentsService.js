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