import { TokenType } from '@prisma/client'
import Joi from 'joi'

class SchemaAuth {
	static register = Joi.object({
		email: Joi.string().email().required(),
		password: Joi.string().min(8).max(32).required(),
	})
	static login = Joi.object({
		email: Joi.string().email().required(),
		password: Joi.string().min(8).max(32).required(),
	})
}

export default SchemaAuth
