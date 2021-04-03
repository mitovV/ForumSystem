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