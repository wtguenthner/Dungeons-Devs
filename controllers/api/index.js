import express from 'express'

const router = express.Router();


import userRoutes from './userRoutes.js'
import charRoutes from './characterRoutes.js'

router.use('/characters', charRoutes)
router.use('/users', userRoutes);


export default router;
