import { useRef, useEffect } from 'react'

const CommentForm = ({ available}) => {
    const ref = useRef(null)

    useEffect(() => {
        if (available) {
            ref.current.scrollIntoView()
            return ref.current.focus()
        }

    }, [available])

    if (!available) return null;
    
    return (
        <form>
            <div>
                <label htmlFor="Content" className="text-primary">Write comment</label>
                <textarea ref={ref} name="Content" id="Content" className="form-control"></textarea>
            </div>
            <div>
                <input type="button" className="btn btn-primary mt-2" value="Add comment" />
            </div>
        </form>
    )
}

export default CommentForm