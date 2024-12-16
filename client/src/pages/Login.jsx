import { useState } from 'react'

export const Login = () => {
	const { loginDate, setLoginDate } = useState({
		email: '',
		password: '',
	})

	return (
		<>
			<h2>Sign-In</h2>
			<form action='/submit' method='post'>
				<input type='email' name='email' />
				<input type='password' name='password' />
			</form>
		</>
	)
}
