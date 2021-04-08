import { useState, useEffect, useContext } from 'react'

import PostForm from '../PostForm'

import userContext from '../../contexts/userContext'

import * as postsService from '../../services/postsService'
import * as commentsService from '../../services/commentsService'

const DeletePost = ({
    match,
    history
}) => {
    const [post, setPost] = useState({
        title: '',
        creator: {},
        comments: [],
    })

    const [user] = useContext(userContext)

    useEffect(() =>
        postsService.getById(match.params.id)
            .then(res => {
                if (!res) {
                    commentsService.getById(match.params.id)
                    .then(res => {
                        setPost(res)
                    })
                }
                setPost(res)
            })
        , [match.params.id])

const onDeleteSubmitHandler = (e) => {
    e.preventDefault()

    let isComment = !e.target.title

    if (isComment) {
        commentsService.deleteById(post._id, user.token)
        .then(history.goBack())
        .catch(console.log)
    }
    else{
        postsService.deleteById(post._id, user.token)
        .then(history.go(-2))
        .catch(console.log)
    }
}

    return (
        <>
        <h3 className="text-danger">Confirm the deletion</h3>
        <div className="row justify-content-center">
                <div className="col-md-6">
                    <PostForm
                        classesBtn={'btn btn-danger mt-2'}
                        title={post?.title}
                        content={post?.content}
                        category={post?.category}
                        submitHandler={onDeleteSubmitHandler}
                        buttonName={'Delete'}
                        readOnly={true} />
                </div>
            </div>
        </>
    )
}

export default DeletePost