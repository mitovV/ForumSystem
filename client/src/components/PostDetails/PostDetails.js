import Card from "../Card"

const PostDetails = ({ post, showAddCommentForm }) => {
    return (
        <>
            <Card post={post} showAddCommentForm={showAddCommentForm} />
            {post.comments.sort((a, b) => new Date(b.createdOn) - new Date(a.createdOn)).map(x =>
                <Card post={x} showAddCommentForm={showAddCommentForm} />
            )}
        </>
    )
}

export default PostDetails