import React, { useState } from "react";

type AuthUser = {
	name: string,
	email: string
}

const User = () => {
	// We can also use TypeAssertion to avoid using null if we are sure that null wont be a possible value
	// But of course it's not recomended to use it
	const [user, setUser] = useState<AuthUser>({} as AuthUser);
	const handleLogin = () => {
		setUser({
			name: 'John', 
			email: 'john@google.com'
		})
	}
	// Let's say that the user cannot Logout
	// const handleLogout = () => {
	// 	setUser(null);
	// }
	return (
		<div>
			<button onClick={handleLogin}>Login</button>
			{/* <button onClick={handleLogout}>Logout</button> */}
			{/* TypeAssertion let us avoid the optional chaining */}
			<div>User is name is: {user.name}</div>
			<div>User is email is: {user.email}</div>
		</div>
	)
}

// export { User }
