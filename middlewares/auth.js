module.exports = {
    isUserAuthenticated: (req, res, next) => {
        if (req.mentor) {
            next()
        } else {
            res.json({ status: 'You are not logged in' })
        }
    }
}