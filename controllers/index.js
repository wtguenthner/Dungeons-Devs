import express from 'express'

const router = express.Router();
import  apiRoutes  from './api/index.js'
// import userRoutes from './api/userRoutes.js'
// const userRoutes = require('./userRoutes.js');
// router.use('/', userRoutes);
// router.use('/', userRoutes);
router.use('/api', apiRoutes);

export  {router};

