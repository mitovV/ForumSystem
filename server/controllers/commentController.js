const router = require('express').Router()
const isAuth = require('../middlewares/isAuth');

const commentsService = require('../services/commentsService')

router.post('/', isAuth,(req, res) => {
    let { postId, parentId, content } = req.body

    commentsService
    .create(postId, parentId, content, req.user._id)
        .then(comment => {
            res.status(201).json({ _id: comment._id })
        })
        .catch(err => res.status(400).json({ err }))
})

router.get('/:id/one', (req,res) => {
    commentsService
    .getById(req.params.id)
    .then(comment => {
        res.status(200).json(comment)
    })
    .catch(console.log)
})

router.get('/:postId/:parentId?', (req, res) => {
    let postId = req.params.postId
    let parentId = req.params.parentId || null

    commentsService
    .getCommentsByParentAndPostId(postId, parentId)
        .then(comments => {
            res.status(200).json(comments)
        })
        .catch(err => res.status(400).json({ err }))
})

router.patch('/:id', isAuth, (req, res) => {
    let { content } = req.body

    commentsService.update(req.params.id, content)
    .then(response => res.status(200).json(response))
    .catch(console.log)
})

router.delete('/:id', isAuth, (req, res) => {
    commentsService
    .deleteById(req.params.id)
    .then(res.status(204).end())
    .catch(console.log)
})

module.exports = router
