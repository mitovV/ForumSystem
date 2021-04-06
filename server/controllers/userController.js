const router = require('express').Router()
const usersService = require('../services/usersService');

router.get('/:username?', (req, res) => {
    let username = req.params.username || ''
    return usersService.getUsername(username)
    .then(user => res.status(200).json(user))
})


module.exports = router
