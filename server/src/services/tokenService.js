import { prisma } from './prisma.js'
import status from 'http-status'

import ApiError from '../utils/Error.js'

class ServiceToken {
	static async create(userId, type) {
		const expireMinutes = parseInt(process.env.ACCESS_TOKEN_EXPIRE_MINUTES) || 30
		const expiredAt = new Date(Date.now() + expireMinutes * 60000)
		const token = await prisma.token.create({
			data: {
				userId,
				type,
				expiredAt,
			},
		})

		return token
	}

	static async isValid(userToken) {
		const token = await this.getByToken(userToken, true)

		if (!token) {
			throw new ApiError(status.UNAUTHORIZED, 'Token not found')
		}

		const tokenIsExpired = token.expiredAt < new Date()

		if (tokenIsExpired) {
			await this.setValid(userToken, false)
		}

		return tokenIsExpired
	}

	static async getByToken(userToken, valid = true) {
		const token = await prisma.token.findUnique({
			where: {
				token: userToken,
				valid,
			},
		})

		return token
	}

	static async getByUserId(userId, valid = true) {
		const token = await prisma.token.findFirst({
			where: {
				userId,
				valid,
			},
		})

		return token
	}

	static async setValid(userToken, valid) {
		if (await this.getByToken(userToken, valid)) {
			throw new ApiError(status.NOT_FOUND, 'Token not found')
		}

		const token = await prisma.token.update({
			where: {
				token: userToken,
			},
			data: {
				valid,
			},
		})

		return token
	}

	static async deleteByUserId(userId, valid = false) {
		if (await this.getByUserId(userId, valid)) {
			throw new ApiError(status.NOT_FOUND, 'Token not found')
		}

		const token = await prisma.token.delete({
			where: {
				userId,
				valid,
			},
		})

		return token
	}

	static async deleteByToken(userToken, valid = false) {
		if (await this.getByToken(userToken, valid)) {
			throw new ApiError(status.NOT_FOUND, 'Token not found')
		}

		const token = await prisma.token.delete({
			where: {
				token: userToken,
			},
		})

		return token
	}
}

export default ServiceToken
