const Category = require('../models/Category')

const create = (name, pictureUrl, creator) => {
    let category = new Category({ name, pictureUrl, creator})

    return category.save()
}

const all = () => {
    return Category.find();
}

const byId = (id) => {
    return Category.findById(id).populate('posts');
}

module.exports = {
    create,
    all,
    byId
}