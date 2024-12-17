import stratus, { status } from 'http-status'

import ApiError from '../utils/Error.js'
import ServiceToken from '../services/tokenService.js'

const verifyAuth = async (req, _, next) => {
	try {
		const token = req.headers.authorization?.split(' ')[1]

		if (!token) {
			next(new ApiError(status.UNAUTHORIZED, 'No authorization'))
		}

		const tokenIsValid = await ServiceToken.isValid(token)

		if (tokenIsValid) {
			next(new ApiError(status.UNAUTHORIZED, 'Token expired'))
		}

		next()
	} catch (error) {
		next(new ApiError(status.UNAUTHORIZED, `[AuthorizationError]: ${error.message}`))
	}
}

export { verifyAuth }
