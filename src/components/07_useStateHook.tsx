import React, { useState } from "react";

const LoggedIn = () => {

	// Here is quite important that we always pass the initialState to useState(), through TypeInference TS will give the type to our isLoggedIn
	const [isLoggedIn, setIsLoggedIn] = useState(false);

	const handleLogin = () => {
		setIsLoggedIn(true);
	}
	const handleLogout = () => {
		setIsLoggedIn(false);
	}
	return (
		<div>
			<button onClick={handleLogin}>Login</button>
			<button onClick={handleLogout}>Logout</button>
			<div>User is {isLoggedIn ? 'logged in' : 'logged out'}</div>
		</div>
	)
}

export { LoggedIn }
