class ModelUser {
	static create = {
		id: true,
		email: true,
	}
	static get = {
		id: true,
		email: true,
		createdAt: true,
		updatedAt: true,
	}
	static delete = {
		id: true,
		email: true,
	}
}

export default ModelUser
