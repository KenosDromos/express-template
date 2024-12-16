import status from 'http-status'
import { Prisma } from '@prisma/client'

import ApiError from '../utils/Error.js'

const errorConverter = (error, req, res, next) => {
	let newError = error

	if (!(error instanceof ApiError)) {
		const statusCode =
			error.statusCode || error instanceof Prisma.PrismaClientKnownRequestError
				? status.BAD_REQUEST
				: status.INTERNAL_SERVER_ERROR
		const message = error.message || status[statusCode]

		newError = new ApiError(statusCode, message)
	}

	next(newError)
}

const errorNotFound = (req, res, next) => {
	next(new ApiError(status.NOT_FOUND, 'Not Found'))
}

const errorHandler = (error, req, res, next) => {
	// console.log(error)
	let { statusCode, message } = error

	const response = {
		code: statusCode,
		message,
	}

	res.status(statusCode).send(response)
}

export { errorHandler, errorNotFound, errorConverter }
