const router = require('express').Router();

const userRoutes = require('./userRoutes');
// const characterRoutes = require('./characterRoutes')
// router.use('/characterCreation', characterRoutes)
router.use('/users', userRoutes);
// router.use('/login', userRoutes);
module.exports = router;
