import React, { useState } from "react";

type AuthUser = {
	name: string,
	email: string
}

const User = () => {
	// To use null to initialize our state is quite comon for values that we dont have yet.
	// Also if the user loggedout we should set the state to null
	// But we tell it, your type can be null or an object of type AuthUser
	const [user, setUser] = useState<AuthUser | null>(null);
	const handleLogin = () => {
		setUser({
			name: 'John', 
			email: 'john@google.com'
		})
	}
	const handleLogout = () => {
		setUser(null);
	}
	return (
		<div>
			<button onClick={handleLogin}>Login</button>
			<button onClick={handleLogout}>Logout</button>
			<div>User is name is: {user?.name}</div>
			<div>User is email is: {user?.email}</div>
		</div>
	)
}

export { User }
