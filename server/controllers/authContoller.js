const router = require('express').Router()
const isGuest = require('../middlewares/isGuest')
const usersService = require('../services/usersService')

router.post('/register', (req, res) => {
    let { username, password, pictureUrl } = req.body

    console.log(req.body);
    usersService.register(username, password, pictureUrl)
        .then(user => {
            res.status(201).json({ _id: user._id })
        })
        .catch(err => res.status(400).json({ err }))
})

router.post('/login', isGuest,(req, res) => {
    let { username, password } = req.body

    usersService.login(username, password)
        .then(token => {
            res.status(200).json({ token })
        })
        .catch(err => res.status(400).json({ err }))
})

module.exports = router