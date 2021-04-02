const router = require('express').Router()

const commentsService  = require('../services/commentsService')

router.post('/', (req, res) => {
    let { postId, parentId, content} = req.body

    commentsService.create(postId, parentId, content, req.user._id)
        .then(comment => {
            res.status(201).json({ _id: comment._id })
        })
        .catch(err => res.status(400).json({ err }))
})

router.get('/:id', (req, res) => {
    commentsService.getCommentsByParentId(req.params.id)
    .then( comments  => {
        res.status(200).json(comments)
    })
    .catch(err => res.status(400).json({ err }))
})

module.exports = router
