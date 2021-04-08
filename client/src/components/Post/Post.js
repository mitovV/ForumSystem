import { useEffect, useState } from 'react'

import Card from '../Card';
import CommentForm from '../CommentForm'

import * as postsService from '../../services/postsService'

const Post = ({
    match,
}) => {
    const [post, setPost] = useState({
        title: '',
        creator: {},
        comments: []
    })

    const [available, setAvailable] = useState(false)
    const [scroll, setScroll] = useState(false)
    const [parentId, setParentId] = useState('')

    useEffect(() => {
        postsService.getById(match.params.id)
            .then(res => {
                setPost(res)
             window.scrollTo(0, 0)
            })
    }, [scroll])

    useEffect(() =>
        postsService.getById(match.params.id)
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
            { post.title ?
                <>
                    <h3>{post.title}</h3>
                    <Card post={post} showAddCommentForm={showAddCommentForm} />
                    <CommentForm available={available} postId={post._id} parentId={parentId} setAvailable={setAvailable} setScroll={setScroll} scroll={scroll}/>
                </>
                : <div className="text-info"><h3>Loading...</h3></div>
            }

        </>
    )
}

export default Post