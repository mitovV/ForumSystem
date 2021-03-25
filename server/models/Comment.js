const mongoose = require('mongoose')

const commentSchema = new mongoose.Schema({
    post: {
        type: mongoose.Types.ObjectId,
        ref: 'Post'
    },
    parent: {
        type: mongoose.Types.ObjectId,
        ref: 'Comment'
    },
    content: {
        type: String,
        required: true,
        minlength: [10, 'Content must be more than 10 characters long']
    },
    creator: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    }
})


module.exports = mongoose.model('Comment', commentSchema)