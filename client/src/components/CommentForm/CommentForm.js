import { useRef, useEffect, useContext } from 'react'
import { Redirect } from 'react-router-dom';
import { Editor } from '@tinymce/tinymce-react'

import userContext from '../../contexts/userContext'

import * as commentsService from '../../services/commentsService'

const CommentForm = ({ available, postId, parentId }) => {
    const ref = useRef(null)
    const [user] = useContext(userContext)

    useEffect(() => {
        if (available) {
            return ref.current.scrollIntoView()
        }

    }, [available])

    if (!available) return null;

    const onAddCommentHandler = (e) => {
        e.preventDefault()

        let content = e.target.content.value
        parentId = parentId === postId ? null : parentId

        //TODO: Fix 
        commentsService.crate(postId, parentId, content, user.token)
            .then(res => {
                console.log(res);
               return <Redirect push to={`/posts/${postId}`}/>
        })
            .catch(console.log)
    }

    return (
        <form onSubmit={onAddCommentHandler}>
            <div>
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