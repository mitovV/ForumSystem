const mongoose = require('mongoose')

const categorySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: [3, 'Name must be more than 3 characters long'],
        maxnlength: [20, 'Name should be lower than 20 characters long']
    },
    pictureUrl: {
        type: String,
        required: true,
    },
    creator: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    },
    posts: [{
        type: mongoose.Types.ObjectId,
        ref: 'Post',
    }]
})

module.exports = mongoose.model('Category', categorySchema)