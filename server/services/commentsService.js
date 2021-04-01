const Comment = require('../models/Comment')
const Post = require('../models/Post')

const create = async (postId, parentId, content, creator) => {
    let comment = new Comment({ postId, parentId, content, creator })
    let post = await Post.findById(postId)
    post.comments.push(comment)
    await post.save()

    return comment.save()
}

module.exports = {
    create
}
