const Comment = require('../models/Comment')
const Post = require('../models/Post')

const create = async (postId, parentId, content, creator) => {
    let comment = new Comment({ post: postId, parent: parentId, content, creator })
    let post = await Post.findById(postId)
    post.comments.push(comment)
    await post.save()

    return comment.save()
}

const getCommentsByParentId = (id) => {
    let comments = Comment.find({parent: id}).populate('creator')

    return comments
}

module.exports = {
    create,
    getCommentsByParentId
}
