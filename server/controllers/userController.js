const router = require('express').Router()
const isAuth = require('../middlewares/isAuth')
const usersService = require('../services/usersService');

router.get('/:username?', (req, res) => {
    let username = req.params.username || ''
    usersService.getUsername(username)
        .then(user => res.status(200).json(user))
})

router.put('/:id', isAuth, (req, res) => {
    let {username, imageUrl, password} = req.body

    usersService.update(req.params.id, username, imageUrl, password)
    .then(user => res.status(200).json({_id: user._id, username: user.username})
    )
})

router.delete ('/:id', isAuth, (req, res) => {
    usersService
    .deleteById(req.params.id)
    .then(res.status(204).end())
    .catch(console.log)
})

module.exports = router
