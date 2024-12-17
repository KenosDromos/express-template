import status from 'http-status'

import ApiError from '../utils/Error.js'

const validateReq = schema => {
	return async (req, res, next) => {
		try {
			if (schema.body && req.body) {
				req.body = await schema.body.validateAsync(req.body)
			}
			if (schema.params && req.params) {
				req.params = await schema.params.validateAsync(req.params)
			}
			if (schema.query && req.query) {
				req.query = await schema.query.validateAsync(req.query)
			}
			next()
		} catch (error) {
			const errorMessage = error.details.map(x => x.message).join(', ')
			next(new ApiError(status.BAD_REQUEST, `[ValidationError]: ${errorMessage}`))
		}
	}
}

export { validateReq }
