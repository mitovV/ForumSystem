import Card from "../Card"

const PostDetails = ({ post, showAddCommentForm }) => {
    return (
        <>
        {post.comments.map(x => <Card post={x} showAddCommentForm={showAddCommentForm} />)}
        </>
    )
}

export default PostDetails