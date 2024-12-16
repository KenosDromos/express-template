import { TokenType } from '@prisma/client'
import status from 'http-status'

import { errorCatch } from './utils/catch.js'
import ApiError from '../utils/Error.js'
import ServiceAuth from '../services/authService.js'
import ServiceUser from '../services/userService.js'
import ServiceToken from '../services/tokenService.js'

class ControllerUser {
	static deleteByEmail = errorCatch(async (req, res) => {
		const { email } = req.params

		const user = await ServiceUser.deleteByEmail(email)

		res.status(status.NO_CONTENT).send()
	})

	static deleteByUserId = errorCatch(async (req, res) => {
		const { id } = req.params

		const user = await ServiceUser.deleteById(id)

		res.status(status.NO_CONTENT).send()
	})
}

export default ControllerUser
