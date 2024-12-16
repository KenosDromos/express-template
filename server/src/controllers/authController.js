import { TokenType } from '@prisma/client'
import status from 'http-status'

import { errorCatch } from './utils/catch.js'
import ApiError from '../utils/Error.js'
import ServiceAuth from '../services/authService.js'
import ServiceUser from '../services/userService.js'
import ServiceToken from '../services/tokenService.js'

class ControllerAuth {
	static register = errorCatch(async (req, res) => {
		const { email, password } = req.body

		const user = await ServiceUser.create(email, password)
		const token = await ServiceToken.create(user.id, TokenType.ACCESS)

		res.status(status.CREATED).send({ token })
	})

	static login = errorCatch(async (req, res) => {
		const { email, password } = req.body

		const user = await ServiceAuth.login(email, password)
		const token = await ServiceToken.create(user.id, TokenType.ACCESS)

		res.status(status.CREATED).send({ token })
	})
}

export default ControllerAuth
