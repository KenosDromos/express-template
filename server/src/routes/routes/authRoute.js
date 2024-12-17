import express from 'express'

import { validateReq } from '../../middleware/validateMiddleware.js'
import ControllerAuth from '../../controllers/authController.js'
import SchemesAuth from './schemas/authSchema.js'

const router = express.Router()

router.post('/register', validateReq(SchemesAuth.register), ControllerAuth.register)
router.post('/login', validateReq(SchemesAuth.login), ControllerAuth.login)
router.post('/logout')

export default router
