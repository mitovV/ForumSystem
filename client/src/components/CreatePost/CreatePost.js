import { useState, useContext } from 'react'

import userContext from '../../contexts/userContext'
import PostForm from '../PostForm'

import * as postsService from '../../services/postsService'

const CreatePost = ({
    history
}) => {
    const titleMessage = 'Title must contain at least 4 characters.'
    const [titleErrorMessage, setTitleErrorMessage] = useState('')
    const [contentErrorMessage, setConstentErrorMessage] = useState('')

    const [user] = useContext(userContext)

    const createPostFormSubmitHandler = (e) => {
        e.preventDefault()

        if (e.target.title.value.length < 4) {
            setTitleErrorMessage(titleMessage)
        }
        else {
            setTitleErrorMessage('')
        }

        if (e.target.content.value.length < 10) {
           return setConstentErrorMessage('Content must contain at least 10 characters.')
        }
        else {
            setConstentErrorMessage('')
        }

            let title = e.target.title.value
            let content = e.target.content.value
            let category = e.target.category.value
    
            postsService
                .create(title, content, category, user.token)
                .then(res => history.push(`/posts/${res._id}`))
                .catch(console.log)
    }

    const onTitleBlurHandler = (e) => {
        if (e.target.value.length < 4 || !e.target.value) {
            setTitleErrorMessage(titleMessage)
        }
        else {
            setTitleErrorMessage('')
        }
    }

    return (
        <>
            <h1 className="text-primary">Crate post</h1>
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <PostForm 
                    buttonName={'Create'} 
                    submitHandler={createPostFormSubmitHandler} 
                    onTitleBlurHandler={onTitleBlurHandler} 
                    titleErrorMessage={titleErrorMessage} 
                    contentErrorMessage={contentErrorMessage} />
                </div>
            </div>
        </>
    )
}

export default CreatePost