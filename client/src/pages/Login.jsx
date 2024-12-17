export const Login = () => {
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
