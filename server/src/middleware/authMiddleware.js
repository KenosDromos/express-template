import stratus, { status } from 'http-status'

import ApiError from '../utils/Error.js'

const verifyAuth = async (req, _, next) => {
	try {
		const data = req.headers
		console.log(data)

		throw new ApiError(401, 'Invalid Access Token')

		next()
	} catch (error) {
		throw new ApiError(status.UNAUTHORIZED, 'No authorized')
	}
}

export { verifyAuth }
