import { TokenType } from '@prisma/client'
import Joi from 'joi'

class SchemaUser {
	static id = Joi.object({
		id: Joi.string().required(),
	})
	static email = Joi.object({
		email: Joi.string().email().required(),
	})
}

export default SchemaUser
