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
    createdOn: {
        type: Date,
    },
    creator: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    },
    comments: [{
        type: mongoose.Types.ObjectId,
        ref: 'Comment',
    }]
})

commentSchema.pre('save', function (next) {

    this.createdOn = Date.now()
    next()
})

module.exports = mongoose.model('Comment', commentSchema)