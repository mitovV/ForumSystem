const router = require('express').Router()
const isAuth = require('../middlewares/isAuth')
const categoriesService = require('../services/categoriesService')

router.post('/', isAuth, (req, res) => {
    let { name, pictureUrl } = req.body

    categoriesService.create(name, pictureUrl, req.user._id)
        .then(category => {
            res.status(201).json({ _id: category._id })
        })
        .catch(err => res.status(400).json({ err }))
})

router.get('/', (req, res) => {
    categoriesService.all()
        .then(categories => {
            res.status(200).json(categories)
        })
        .catch(err => res.status(401).json({ err }))
})

router.get('/:id', (req, res) => {
    categoriesService.byId(req.params.id)
        .then( category  => {
            console.log('test');
            res.status(200).json(category)
        })
        .catch(err => res.status(400).json({ err }))
})


module.exports = router