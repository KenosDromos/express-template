import express from 'express'
import cors from 'cors'

import { errorHandler, errorNotFound, errorConverter } from './middleware/errorMiddleware.js'
import routes from './routes/routes.js'

const app = express()
const PORT = process.env.PORT

const main = () => {
	app.use(express.json())
	app.use(cors())
	app.use(routes)

	app.use(errorNotFound)
	app.use(errorConverter)
	app.use(errorHandler)

	try {
		app.listen(PORT, console.log(`Server started on port: ${PORT}`))
	} catch (e) {
		console.log(e)
	}
}

main()
