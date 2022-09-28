module.exports = {
    ensureAuth: function (req, res, next) {
      if (req.isAuthenticated()) {
        //req.isAuthenticated() will return true if user is logged in
        return next()
      } else {
        res.redirect('/')
      }
    }
  }
  