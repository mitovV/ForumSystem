const router = require('express').Router()

const commentsService  = require('../services/commentsService')
const postsService  = require('../services/postsService')

router.post('/', (req, res) => {
    let { postId, parentId, content} = req.body

    commentsService.create(postId, parentId, content, req.user._id)
        .then(comment => {
            res.status(201).json({ _id: comment._id })
        })
        .catch(err => res.status(400).json({ err }))
})

module.exports = router
