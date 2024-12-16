import express from 'express'

import { validateBody } from '../../middleware/validateMiddleware.js'
import ControllerAuth from '../../controllers/authController.js'
import SchemaAuth from './schemas/authSchema.js'

const router = express.Router()

router.post('/register', validateBody(SchemaAuth.register), ControllerAuth.register)
router.post('/login', validateBody(SchemaAuth.login), ControllerAuth.login)
router.post('/logout')

export default router
