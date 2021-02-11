function isLoggedIn(req, res, next) {
    if (!req.user) {
        req.flash('error', 'You must be signed in to access page')
    } else {
        next();
    }
}

module.exports = isLoggedIn; 