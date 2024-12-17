class RequestSchema {
	constructor({ body = null, params = null, query = null } = {}) {
		this.body = body
		this.params = params
		this.query = query
	}
}

export default RequestSchema
