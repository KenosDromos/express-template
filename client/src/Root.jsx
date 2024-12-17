import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { ProtectedRoutes } from './utils/ProtectedRoutes'

import { Home } from './pages/Home'
import { Login } from './pages/Login'
import { Register } from './pages/Register'

export const Root = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/login' element={<Login />} />
				<Route path='/register' element={<Register />} />

				<Route element={<ProtectedRoutes />}>
					<Route path='/' element={<Home />} />
				</Route>
			</Routes>
		</BrowserRouter>
	)
}
