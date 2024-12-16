import { prisma } from './prisma.js'
import status from 'http-status'

import ApiError from '../utils/Error.js'
import ServiceUser from './userService.js'
import { Encrypt } from '../utils/encryption.js'

class ServiceAuth {
	static async login(email, password) {
		const user = await ServiceUser.getUserByEmail(email, true)

		if (!user || !(await Encrypt.compareHash(password, user.password))) {
			throw new ApiError(status.UNAUTHORIZED, 'Incorrect email or password')
		}

		const { password: _, ...userWithoutPassword } = user

		return userWithoutPassword
	}
}

export default ServiceAuth
