const jwt = require('jsonwebtoken')
const { SECRET, AUTORIZATION_HEADER } = require('../config/config')

const auth = (req, res, next) => {
    let authorizationHeader = req.get(AUTORIZATION_HEADER)

    if (authorizationHeader) {
        let token = authorizationHeader.split(' ')[1]

        try {
            let decoded = jwt.verify(token, SECRET)

            req.user = decoded
        } catch (e) {
           res.status(401).json({message: 'Ivalid token'})
        }

    }

    next()
}

module.exports = auth