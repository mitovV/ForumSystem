import { useRef, useEffect } from 'react'
import { Editor } from '@tinymce/tinymce-react'

const CommentForm = ({ available, postId, parentId}) => {
    const ref = useRef(null)

    useEffect(() => {
        if (available) {
         return    ref.current.scrollIntoView()
        }

    }, [available])

    if (!available) return null;
    
    const onAddCommentHandler = (e) => {
        e.preventDefault()

        // TODO: Check for same ids
        console.log(e.target.content.value);
        console.log(postId);
        console.log(parentId);
    }

    return (
        <form onSubmit={onAddCommentHandler}>
            <div>
                <label htmlFor="content" className="text-primary">Write comment</label>
                <Editor id="content" name="content"  className="form-control"></Editor>
            </div>
            <div>
                <input ref={ref} type="submit" className="btn btn-primary mt-2" value="Add comment" />
            </div>
        </form>
    )
}

export default CommentForm