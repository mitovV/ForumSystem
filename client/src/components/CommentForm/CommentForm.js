import { useRef, useEffect, useContext, useState } from 'react'
import { Editor } from '@tinymce/tinymce-react'

import InputError from '../Shared/InputError'

import userContext from '../../contexts/userContext'
import config from '../../config/config.Development'

import * as commentsService from '../../services/commentsService'

import './CommentForm.css'

const CommentForm = ({ 
    available,
    postId,
    parentId,
    setAvailable,
    setScroll,
    scroll 
}) => {
    const [contentErrorMessage, setContentErrorMessage] = useState('')
    
    const ref = useRef(null)
    const [user] = useContext(userContext)

    useEffect(() => {
        if (available) {
            return ref.current.scrollIntoView()
        }

    }, [available])

    if (!available) return null

    const onAddCommentHandler = (e) => {
        e.preventDefault()

        let content = e.target.content.value
        parentId = parentId === postId ? null : parentId

        if (content < 10) {
            return setContentErrorMessage('Content must contain at least 10 characters.')
        }else{
            setContentErrorMessage('')
        }

        commentsService.crate(postId, parentId, content, user.token)
            .then(res => {
                setAvailable(!available)
                setScroll(!scroll)
            })
            .catch(console.log)
    }

    return (
        <form onSubmit={onAddCommentHandler} className='comment-form'>
            <div>
            <InputError>{contentErrorMessage}</InputError>
                <label htmlFor="content" className="text-primary">Write comment</label>
                <Editor 
                    key={config.TinyMCEKey} 
                    id="content" 
                    name="content" 
                    className="form-control">  
                    init={{
                        content_style:'body{font-family: cursive;}'
                    }}
                </Editor>
            </div>
            <div>
                <input ref={ref} type="submit" className="btn btn-primary mt-2 comment-form-button" value="Add comment" />
            </div>
        </form>
    )
}

export default CommentForm