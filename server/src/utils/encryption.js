import bcrypt from 'bcryptjs'

class Encrypt {
	static async generateHash(text) {
		return await bcrypt.hash(text, 6)
	}

	static async compareHash(text, hashText) {
		return await bcrypt.compare(text, hashText)
	}
}

export { Encrypt }
