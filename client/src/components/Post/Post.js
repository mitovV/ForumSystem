import { useEffect, useState } from 'react'

import Card from '../Card';
import CommentForm from '../CommentForm'

import * as postsService from '../../services/postsService'

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
        postsService.getById(match.params.id)
            .then(setPost)
        , [match.params.id])

    const showAddCommentForm = (parentId) => {
        setAvailable(!available)
        setParentId(parentId)
    }

    return (
        <>
            { post.title ?
                <>
                    <h3>{post.title}</h3>
                    <Card post={post} showAddCommentForm={showAddCommentForm} />
                    <CommentForm available={available} postId={post._id} parentId={parentId} />
                </>
                : <div className="text-info"><h3>Loading...</h3></div>
            }

        </>
    )
}

export default Post