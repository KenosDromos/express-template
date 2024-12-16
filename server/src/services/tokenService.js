import { prisma } from './prisma.js'
import status from 'http-status'

import ApiError from '../utils/Error.js'

class ServiceToken {
	static async create(userId, type) {
		const expireMinutes = parseInt(process.env.ACCESS_TOKEN_EXPIRE_MINUTES) || 30
		const expireAt = new Date(Date.now() + expireMinutes * 60000)
		const token = await prisma.token.create({
			data: {
				userId,
				type,
				expireAt,
			},
		})

		return token
	}

	static async isExpired(userToken) {
		const token = await this.getByToken(userToken)

		tokenIsExpired = token.expireAt < new Date()

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
		if (await this.getByToken(userToken)) {
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
