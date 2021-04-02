import { useState } from "react"

import Card from "../Card"
import * as commentsService from'../../services/commentsService'

const PostDetails = ({ post, showAddCommentForm }) => {
    const [test, setTest] = useState({
        title: '',
        creator: {},
        comments: []
    })

    const displayComments = (parentId) => {

        commentsService.getCommentsByparentId(parentId).then(comments => {

            if (comments.length === 0)
            {
                return
            }

           return comments.map(x => x);
        }).then(res => setTest(res[0]))
    }

    return (
        <>
            <Card post={post} showAddCommentForm={showAddCommentForm} />
            {post.comments.filter(x => x.parent === null).sort((a, b) => new Date(b.createdOn) - new Date(a.createdOn)).map(x =>
            <>
                <Card post={x} showAddCommentForm={showAddCommentForm} />
                {(displayComments(x._id)) }
                <Card post={test} showAddCommentForm={showAddCommentForm} />
                </>
            )}
        </>
    )
}

export default PostDetails