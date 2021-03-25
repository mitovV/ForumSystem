const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
        minlength: [10, 'Content must be more than 10 characters long']
    },
    creator: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    },
    category: {
        type: mongoose.Types.ObjectId,
        ref: 'Category'
    },
    createdOn: {
        type: Date,
        required: true
    },
    comments: [{
        type: mongoose.Types.ObjectId,
        ref: 'Comment',
    }]
});

module.exports = mongoose.model('Post', postSchema);