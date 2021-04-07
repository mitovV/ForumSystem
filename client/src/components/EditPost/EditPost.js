import { useContext, useEffect, useState } from 'react'

import userContext from '../../contexts/userContext'

import PostForm from '../PostForm'

import * as postsService from '../../services/postsService'

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

        let title = e.target.title.value
        let content = e.target.content.value
        let category = e.target.category.value

        postsService
        .update(post._id, title, content, category, user.token)
        .then(history.push(`/posts/${post._id}`))
        .catch(console.log)
    }

    return (
        <>
            <h1 className="text-primary">Edit post</h1>
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <PostForm 
                    title={post?.title} 
                    content={post?.content} 
                    category={post?.category} 
                    buttonName={'Edit'} 
                    submitHandler={onEditFormHandler} 
                    onTitleBlurHandler={onTitleBlurHandler} 
                    titleErrorMessage={titleErrorMessage} />
                </div>
            </div>
        </>
    )
}

export default EditPost