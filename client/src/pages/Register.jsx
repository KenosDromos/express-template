import { useState } from 'react'

export const Register = () => {
	const { registerDate, setRegisterDate } = useState({
		email: '',
		firstName: '',
		lastName: '',
		birthdate: '',
		password: '',
		repeatPassword: '',
	})

	return (
		<>
			<h2>Sign-Up</h2>
			<form action='/submit' method='post'>
				<input type='email' name='email' />
				<input type='password' name='password' />
				<input type='submit' value='Register' />
			</form>
		</>
	)
}
