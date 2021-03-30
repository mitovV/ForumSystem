const Post = require('../models/Post')
const Category = require('../models/Category')

const create = async (title, content, creator, category) => {
    let post = new Post({ title, content, creator, category})
    let cat = await Category.findById(category)
       cat.posts.push(post)
       await cat.save()

       return post.save()
}

const allByCategory = (id) => {
    return Post.find({category: id});
}

const byId = (id) => {
    return Post.findById(id);
}

module.exports = {
    create,
    allByCategory,
    byId
}