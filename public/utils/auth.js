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
