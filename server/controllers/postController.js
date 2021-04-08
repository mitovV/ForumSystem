const router = require('express').Router()
const isAuth = require('../middlewares/isAuth')
const postsService = require('../services/postsService')

router.post('/', isAuth, (req, res) => {
    let { title, content, category } = req.body

    postsService.create(title, content, req.user._id, category)
        .then(post => {
            res.status(201).json({ _id: post._id })
        })
        .catch(err => res.status(400).json({ err }))
})

router.get('/', (req, res) => {
    let { id } = req.body
    postsService.allByCategory(id)
        .then(posts => {
            res.status(200).json(posts)
        })
        .catch(err => res.status(401).json({ err }))
})

router.get('/:id', (req, res) => {
    postsService.byId(req.params.id)
        .then(post => {
            res.status(200).json(post)
        })
        .catch(err => res.status(400).json({ err }))
})

router.get('/:id/comments', (req, res) => {
    postsService.getCommentsCount(req.params.id)
        .then(count => res.status(200).json(count))
        .catch(err => res.status(400).json({ err }))
})

router.put('/:id', (req, res) => {
    let {title, content, category} = req.body
    
    postsService.update(req.params.id, title, content, category)
    .then(response => res.status(200).json(response))
    .catch(console.log)
})

router.delete('/:id', isAuth, (req, res) => {
    postsService
    .deleteById(req.params.id)
    .then(res.status(204).end())
    .catch(console.log)
})


module.exports = router