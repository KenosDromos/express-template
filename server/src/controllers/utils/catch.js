const errorCatch = controller => {
	return async (req, res, next) => {
		try {
			await controller(req, res)
		} catch (error) {
			return next(error)
		}
	}
}

export { errorCatch }
