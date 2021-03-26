const isGuest = (req, res, next) => {
    if (req.user) {
        res.status(400).end()
    }

    next()
}

module.exports = isGuest