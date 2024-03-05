import React from "react";
import { Login } from "./Login";
import { ProfileProps } from "./Profile";


// Here we see how to type a Component passed as a prop
type PrivateProps = {
	isLoggedIn: boolean
	Component: React.ComponentType<ProfileProps>
}

const Private = ({ isLoggedIn, Component }: PrivateProps) => {
	if (isLoggedIn) {
		return <Component name='Your name'/>
	} else {
		return <Login />
	}
}

export { Private }
