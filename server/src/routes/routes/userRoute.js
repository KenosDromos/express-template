import express from 'express'

import { validateReq } from '../../middleware/validateMiddleware.js'
import { verifyAuth } from '../../middleware/authMiddleware.js'
import ControllerUser from '../../controllers/userController.js'
import SchemesUser from './schemas/userSchema.js'

const router = express.Router()

router.delete('/deleteByUserId/:id', validateReq(SchemesUser.id), verifyAuth, ControllerUser.deleteByUserId)
router.delete('/deleteByEmail/:email', validateReq(SchemesUser.email), verifyAuth, ControllerUser.deleteByEmail)

export default router
