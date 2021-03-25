const router = require('express').Router()
const usersService = require('../services/usersService')

router.post('/register', (req, res) => {
    let { email, password } = req.body

    usersService.register(email, password)
        .then(user => {
            console.log(user)
            res.status(201).json({ _id: user._id })
        })
        .catch(err => res.status(400).json({ err }))
})

router.post('/login', (req, res) => {
    let { email, password } = req.body

    usersService.login(email, password)
        .then(token => {
            res.status(200).json({ token })
        })
        .catch(err => res.status(400).json({ err }))
})

module.exports = router