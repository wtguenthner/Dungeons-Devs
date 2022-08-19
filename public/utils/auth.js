const withAuth = (req, res, next) => {
    if (!req.session.loggedIn) {
        res.redirect('/');
    } else {
        next();
    }
}

export default withAuth;