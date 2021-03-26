const isAuth = (req,res,next) => {
    if (!req.user) {
        res.status(401).end()
    }

    next()
}

module.exports = isAuth