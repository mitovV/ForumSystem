const Category = require('../data/models/Category')

const create = (name, pictureUrl, creator) => {
    let category = new Category({ name, pictureUrl, creator })

    return category.save()
}

const all = () => {
    return Category.find();
}

const byId = (id) => {
    return Category.findById(id)
}

module.exports = {
    create,
    all,
    byId
}