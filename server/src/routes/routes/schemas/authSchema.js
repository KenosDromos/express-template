import Joi from 'joi'

import { TokenType } from '@prisma/client'
import RequestSchema from './utils/requestSchema.js'

class SchemesAuth {
	static register = new RequestSchema({
		body: Joi.object({
			email: Joi.string().email().required(),
			password: Joi.string().min(8).max(32).required(),
		}),
	})
	static login = new RequestSchema({
		body: Joi.object({
			email: Joi.string().email().required(),
			password: Joi.string().min(8).max(32).required(),
		}),
	})
}

export default SchemesAuth
