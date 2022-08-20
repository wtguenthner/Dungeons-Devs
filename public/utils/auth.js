import passport from 'passport';
import router from '../../controllers/index.js'

passport.serializeUser(function (user, cb) {
  process.nextTick(function () {
    return cb(null, {
      id: user.id,
      username: user.username,
      picture: user.picture,
    });
  });
});

passport.deserializeUser(function (user, cb) {
  db.get("SELECT * FROM users WHERE id = ?", [id], function (err, user) {
    process.nextTick(function () {
      return cb(null, user);
    });
  });
});

function apiBuilder(passport) {
  router.route('./api/index.js')
      .post(passport.authenticate('local-signup', {
          successRedirect: '/menu.html',
          failureRedirect: '/',
          failureFlash: true
      })
  )
}

export default apiBuilder;