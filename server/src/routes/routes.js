import { Router } from 'express'

import authRouter from './routes/authRoute.js'
import userRouter from './routes/userRoute.js'

const router = Router()

router.use('/auth', authRouter)
router.use('/user', userRouter)

export default Router().use('/api/v1', router)
