import { useEffect, useState } from 'react'

import * as postService from '../../services/postsService'
import Card from '../Card';
import CommentForm from '../CommentForm'

const Post = ({
    match
}) => {
    const [post, setPost] = useState({
        title: '',
        creator: {},
        comments: []
    })

    const [available, setAvailable] = useState(false)
    const [parentId, setParentId] = useState('')

    useEffect(() =>
        postService.getById(match.params.id)
            .then(res => {
                setPost(res)
            })
        , [match.params.id])

    const showAddCommentForm = (parentId) => {
        setAvailable(!available)
        setParentId(parentId)
    }
    
    return (
        <>
            <h3>{post.title}</h3>
            <Card post={post} showAddCommentForm={showAddCommentForm} />
            <CommentForm available={available} postId={post._id} parentId={parentId} />
        </>
    )
}

export default Post