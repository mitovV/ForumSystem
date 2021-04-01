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

    useEffect(() =>
        postService.getById(match.params.id)
            .then(res => {
                setPost(res)
            })
        , [match.params.id])

    const showAddCommentForm = () => {
        setAvailable(!available)
    }

    return (
        <>
            <h3>{post.title}</h3>
            <Card post={post} showAddCommentForm={showAddCommentForm} />
            <CommentForm available={available} id={post._id} />
        </>
    )
}

export default Post