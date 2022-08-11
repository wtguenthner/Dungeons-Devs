import express from 'express'

const router = express.Router();

import  apiRoutes  from './api/index.js'
// const userRoutes = require('./userRoutes.js');

// router.use('/', userRoutes);
router.use('/api', apiRoutes);

export default router;

