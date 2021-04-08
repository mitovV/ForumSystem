import { useRef, useEffect, useContext, useState } from 'react'
import { Editor } from '@tinymce/tinymce-react'

import InputError from '../Shared/InputError'

import userContext from '../../contexts/userContext'

import * as commentsService from '../../services/commentsService'

const CommentForm = ({ 
    available,
    postId,
    parentId,
    setAvailable,
    setScroll,
    scroll 
}) => {
    const [contentErrorMessage, setConstentErrorMessage] = useState('')

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
            return setConstentErrorMessage('Content must contain at least 10 characters.')
        }else{
            setConstentErrorMessage('')
        }

        commentsService.crate(postId, parentId, content, user.token)
            .then(res => {
                setAvailable(!available)
                setScroll(!scroll)
            })
            .catch(console.log)
    }

    return (
        <form onSubmit={onAddCommentHandler}>
            <div>
            <InputError>{contentErrorMessage}</InputError>
                <label htmlFor="content" className="text-primary">Write comment</label>
                <Editor id="content" name="content" className="form-control"></Editor>
            </div>
            <div>
                <input ref={ref} type="submit" className="btn btn-primary mt-2" value="Add comment" />
            </div>
        </form>
    )
}

export default CommentForm