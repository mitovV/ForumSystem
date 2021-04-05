import Card from "../Card"

const PostDetails = ({ comments, showAddCommentForm }) => {
    return (
        <>
        {comments.sort((a, b) => new Date(b.createdOn) - new Date(a.createdOn))
            .map(x => <Card key={x._id} post={x} showAddCommentForm={showAddCommentForm} />)}
        </>
    )
}

export default PostDetails