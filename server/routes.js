const router = require('express').Router()
const authController = require('./controllers/authController')
const categoryController = require('./controllers/categoryController')
const postController = require('./controllers/postController')
const commentController = require('./controllers/commentController')
const userController = require('./controllers/userController')

router.use('/auth', authController)
router.use('/categories', categoryController)
router.use('/posts', postController)
router.use('/comments', commentController)
router.use('/users', userController)

module.exports = router