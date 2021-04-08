import { useContext, useEffect, useState } from 'react'

import userContext from '../../contexts/userContext'

import PostForm from '../PostForm'

import * as postsService from '../../services/postsService'
import * as commentsService from '../../services/commentsService'

const EditPost = ({
    match,
    history
}) => {
    const titleMessage = 'Title must contain at least 4 characters.'
    const [titleErrorMessage, setTitleErrorMessage] = useState('')
    const [user] = useContext(userContext)

    const [post, setPost] = useState({
        title: '',
        creator: {},
        comments: [],
    })

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
        , [])

    const onTitleBlurHandler = (e) => {
        if (e.target.value.length < 4 || !e.target.value) {
            setTitleErrorMessage(titleMessage)
        }
        else {
            setTitleErrorMessage('')
        }
    }

    const onEditFormHandler = (e) => {
        e.preventDefault()

        let isComment = !e.target.title
        let title
        let category

        if (!isComment) {
            title = e.target.title.value 
            category = e.target.category.value 
        }
        
        let content = e.target.content.value

        if (!isComment && title.length < 4) {
            return setTitleErrorMessage(titleMessage)
        }

        if (isComment) {
            commentsService
                .update(post._id, content, user.token)
                .then(res => history.goBack())
                .catch(console.log)
        }
        else {
            postsService
                .update(post._id, title, content, category, user.token)
                .then(res => history.push(`/posts/${post._id}`))
                .catch(console.log)
        }
    }

    return (
        <>
        {
            post?.category 
            ? <h1 className="text-primary">Edit post</h1> 
            : <h1 className="text-primary">Edit comment</h1>
        }
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <PostForm
                        classesBtn={'btn btn-success mt-2'}
                        title={post?.title}
                        content={post?.content}
                        category={post?.category}
                        buttonName={'Edit'}
                        submitHandler={onEditFormHandler}
                        onTitleBlurHandler={onTitleBlurHandler}
                        titleErrorMessage={titleErrorMessage}
                        readOnly={false} />
                </div>
            </div>
        </>
    )
}

export default EditPost