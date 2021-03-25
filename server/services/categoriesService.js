const Category = require('../models/Category')

const create = (name, pictureUrl) => {
    let category = new Category({ name, pictureUrl })

    return category.save()
}

const all = () => {
    return Category.find().lean();
}

const byId = (id) => {
    return Category.findById(id).lean();
}

module.exports = {
    create,
    all
}