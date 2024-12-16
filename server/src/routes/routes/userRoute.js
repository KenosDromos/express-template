import express from 'express'

import { validateBody } from '../../middleware/validateMiddleware.js'
import { verifyAuth } from '../../middleware/authMiddleware.js'
import ControllerUser from '../../controllers/userController.js'
import SchemaUser from './schemas/userSchema.js'

const router = express.Router()

router.post('/deleteByUserId/:id', validateBody(SchemaUser.id), verifyAuth, ControllerUser.deleteByUserId)
router.post('/deleteByEmail/:email', validateBody(SchemaUser.email), verifyAuth, ControllerUser.deleteByEmail)

export default router
