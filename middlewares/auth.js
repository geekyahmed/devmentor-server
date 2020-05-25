module.exports = {
    isUserAuthenticated: (req, res, next) => {
        if (req.isAuthenticated) {
            next()
        } else {
            res.json({ status: 'You are not logged in' })
        }
    }
}