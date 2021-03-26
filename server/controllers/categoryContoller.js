const router = require('express').Router()
const isAuth = require('../middlewares/isAuth')
const categoriesService = require('../services/categoriesService')

router.post('/', isAuth,(req, res) => {
    let { name, pictureUrl } = req.body

    categoriesService.create(name, pictureUrl, req.user._id)
        .then(category => {
            res.status(201).json({ _id: category._id })
        })
        .catch(err => res.status(400).json({ err }))
})

router.get('/', isAuth,(req, res) => {
    categoriesService.all()
        .then(posts => {
            res.status(200).json({ posts })
        })
        .catch(err => res.status(401).json({ err }))
})


module.exports = router