import Joi from 'joi'

import { TokenType } from '@prisma/client'
import RequestSchema from './utils/requestSchema.js'

class SchemesUser {
	static id = new RequestSchema({
		params: Joi.object({
			id: Joi.string().required(),
		}),
	})
	static email = new RequestSchema({
		params: Joi.object({
			email: Joi.string().email().required(),
		}),
	})
}

export default SchemesUser
