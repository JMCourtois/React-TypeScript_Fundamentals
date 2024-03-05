import React from "react";
import { useContext } from "react";
import { UserContext } from "./context/UserContext";

const User = () => {
	const userContext = useContext(UserContext);
	const handleLogin = () => {
		if(userContext) {
			userContext.setUser({
				name: 'John',
				email: 'john@google.com'
			})
		}
	}
	const handleLogout = () => {
		if(userContext) {
			userContext.setUser(null);
		}
	}
	return (
		<div>
			<button onClick={handleLogin}>Login</button>
			<button onClick={handleLogout}>Logout</button>
			<div>User name is {userContext?.user?.name}</div>
			<div>User email is {userContext?.user?.email}</div>
		</div>
	)
}

export { User }
