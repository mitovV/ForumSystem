const router = require('express').Router()
const authContoller = require('./controllers/authContoller')
const categoryContoller = require('./controllers/categoryContoller')

router.use('/auth', authContoller)
router.use('/categories', categoryContoller)

module.exports = router