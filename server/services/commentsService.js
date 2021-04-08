const Comment = require('../models/Comment')
const Post = require('../models/Post')

const create = async (postId, parentId, content, creator) => {
    let comment = new Comment({ post: postId, parent: parentId, content, creator })

    return comment.save()
}

const getCommentsByParentAndPostId = (postId, parentId) => {
    let comments = Comment.find({ post: postId, parent: parentId }).populate('creator')

    return comments
}

const getById = (id) => {
    return Comment.findById(id).populate('creator')
}

const update = (_id, content) => {
    return Comment.findOneAndUpdate({_id}, {
        content,
        createdOn: Date.now()
      })
  }

const deleteById = (_id) => {
    return Comment.findByIdAndDelete(_id)
}

module.exports = {
    create,
    getCommentsByParentAndPostId,
    getById,
    update,
    deleteById
}
