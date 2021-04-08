const Post = require('../models/Post')
const Category = require('../models/Category')
const Comment = require('../models/Comment')

const create = async (title, content, creator, category) => {
    let post = new Post({ title, content, creator, category })
    let cat = await Category.findById(category)
    cat.posts.push(post)
    await cat.save()

    return post.save()
}

const allByCategory = (id) => {
    return Post.find({ category: id }).populate('creator');
}

const byId = (id) => {
    return Post.findById(id).populate('creator').populate('comments')
}

const getCommentsCount = (id) => {
    return Comment.find({ post: id }).countDocuments()
}

const update = (_id, title, content, category) => {
  return  Post.findOneAndUpdate({_id}, {
      title,
      content,
      category,
      createdOn: Date.now()
    })
}

const deleteById = (_id) => {
    return Post.findByIdAndDelete(_id)
}

const getCountByCategoryId = (_id) => {
    return Post.find({category: _id}).countDocuments()
}

module.exports = {
    create,
    allByCategory,
    byId,
    getCommentsCount,
    update,
    deleteById,
    getCountByCategoryId
}