const authMiddleware = (req, res, next) => {
    if (req.session.idUser != undefined) {
        next()
    } else {
        res.status(401).json('You are not logged in yet');
    }
}

module.exports = authMiddleware;