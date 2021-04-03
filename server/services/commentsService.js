const Comment = require('../models/Comment')
const Post = require('../models/Post')

const create = async (postId, parentId, content, creator) => {
    let comment = new Comment({ post: postId, parent: parentId, content, creator })

    return comment.save()
}

const getCommentsByParentAndPostId = (postId, parentId) => { 
  let  comments = Comment.find({post: postId, parent: parentId}).populate('creator')

    return comments
}

module.exports = {
    create,
    getCommentsByParentAndPostId
}
