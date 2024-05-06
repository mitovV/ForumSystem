const User = require("../data/models/User")
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const { SECRET, DEFAULT_USER_PICTURE, SALT_ROUNDS } = require('../config/config')

const register = (username, password, pictureUrl) => {
    pictureUrl = pictureUrl || DEFAULT_USER_PICTURE

    let user = new User({ username, password, pictureUrl })

    return user.save()
}

const login = async (username, password) => {
    let user = await User.findOne({ username })
    const errorObj = { message: 'Invalid username or password' }

    if (!user) {
        throw errorObj
    }

    let areEqual = await bcrypt.compare(password, user.password)

    if (!areEqual) {
        throw errorObj
    }

    let token = jwt.sign({ _id: user._id, username: user.username }, SECRET, { expiresIn: '1h' })

    return {
        _id: user._id,
        username: user.username,
        token
    }
}

const getUsername = (username) => {
    return User.findOne({ username })
        .select('username')
        .select('pictureUrl')
}

const update = (_id, username, pictureUrl, password) => {
    pictureUrl = pictureUrl || DEFAULT_USER_PICTURE

    if (password) {
        bcrypt.genSalt(SALT_ROUNDS)
            .then(salt => bcrypt.hash(password, salt))
            .then(hash => {
                password = hash

                return User.findOneAndUpdate({ _id }, {
                    username,
                    pictureUrl,
                    password,
                }, {new: true})
            })
    }

    return User.findOneAndUpdate({ _id }, {
        username,
        pictureUrl,
    }, {new: true})
}

const deleteById = (id) => {
    return User.findByIdAndDelete(id)
}

module.exports = {
    register,
    login,
    getUsername,
    update,
    deleteById
}