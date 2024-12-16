import { prisma } from './prisma.js'
import status from 'http-status'

import { Encrypt } from '../utils/encryption.js'
import ApiError from '../utils/Error.js'
import ModelUser from './models/userModel.js'

class ServiceUser {
	static async create(email, password) {
		if (await this.getUserByEmail(email)) {
			throw new ApiError(status.BAD_REQUEST, 'User already exists')
		}

		const hashPassword = await Encrypt.generateHash(password)
		const user = await prisma.user.create({
			data: {
				email,
				password: hashPassword,
			},
			select: ModelUser.create,
		})

		return user
	}

	static async deleteByEmail(email) {
		if (!(await this.getUserByEmail(email))) {
			throw new ApiError(status.NOT_FOUND, 'User not found')
		}

		const user = await prisma.user.delete({
			where: {
				email,
			},
			select: ModelUser.delete,
		})

		return user
	}

	static async deleteById(id) {
		if (!(await this.getUserById(id))) {
			throw new ApiError(status.NOT_FOUND, 'User not found')
		}

		const user = await prisma.user.delete({
			where: {
				id,
			},
			select: ModelUser.delete,
		})

		return user
	}

	static async getUserByEmail(email, selectPassword = false) {
		const selectFields = selectPassword ? { ...ModelUser.get, password: true } : ModelUser.get

		const user = await prisma.user.findUnique({
			where: { email },
			select: selectFields,
		})

		return user
	}

	static async getUserById(id, selectPassword = false) {
		const selectFields = selectPassword ? { ...ModelUser.get, password: true } : ModelUser.get

		const user = await prisma.user.findUnique({
			where: { id },
			select: selectFields,
		})

		return user
	}
}

export default ServiceUser
